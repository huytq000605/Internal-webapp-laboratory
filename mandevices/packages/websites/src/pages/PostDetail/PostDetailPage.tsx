import { PageWrapper } from 'elements/Page';
import React from 'react';
import { usePostDetailQuery } from 'generated/graphql';
import Loading from 'shared/loading/Loading';
import { useParams } from 'react-router-dom';
import MarkDown from 'shared/MarkDown';
import SEO from 'common/SEO';
import getImageURL from 'utils/getImageURL';
import { NormalSemiBoldText } from 'common/typography';
import dayjs from 'dayjs';
import getAvatarSrc from 'common/getAvatarSrc';
import Toc from 'react-toc';
import BreadcrumbView from 'views/Breadcrumb/BreadcrumbView';
import {
    Wrapper,
    ThumbnailWrapper,
    Title,
    Author,
    AuthorAvatar,
    PublishedAt,
    Body,
} from './PostDetail.styled';

const PostDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, data } = usePostDetailQuery({ variables: { id } });

    const title = data?.post?.title;

    if (loading) return <Loading />;
    return (
        <>
            <SEO
                title={title}
                description={data?.post?.content.slice(0, 100)}
                author={data?.post?.author?.fullName}
                type="article"
                imageUrl={data?.post?.thumbnail?.url}
                imageAlt={data?.post?.thumbnail?.caption}
                keywords={data?.post?.tags
                    ?.filter((tag) => tag?.title)
                    .map((tag) => tag?.title)}
            />

            <PageWrapper>
                <Wrapper>
                    <div
                        className="fb-like"
                        data-href={window.location.href}
                        data-width="200"
                        data-layout="button_count"
                        data-action="like"
                        data-size="large"
                        data-share="true"
                    />
                    <BreadcrumbView
                        data={[
                            {
                                link: '/',
                                name: 'Trang chủ',
                            },
                            {
                                link: '/bai-viet',
                                name: 'Bài viết',
                            },
                            {
                                name: title,
                            },
                        ]}
                    />
                    <Title>{title}</Title>
                    <Author>
                        <AuthorAvatar
                            src={getAvatarSrc(
                                data?.post?.author?.gender,
                                data?.post?.author?.avatar?.url
                            )}
                        />
                        <NormalSemiBoldText>
                            {data?.post?.author?.fullName}
                        </NormalSemiBoldText>
                        <PublishedAt>
                            {dayjs(data?.post?.published_at).format(
                                'DD/MM/YYYY'
                            )}
                        </PublishedAt>
                    </Author>
                    {data?.post?.thumbnail?.url && (
                        <ThumbnailWrapper>
                            <img
                                src={getImageURL(data?.post?.thumbnail?.url)}
                                alt={title}
                            />
                            <figcaption>
                                {data?.post?.thumbnail?.caption}
                            </figcaption>
                        </ThumbnailWrapper>
                    )}
                    <Body>
                        <MarkDown>{data?.post?.content}</MarkDown>
                        <Toc
                            markdownText={data?.post?.content || ''}
                            lowestHeadingLevel={4}
                        />
                    </Body>
                </Wrapper>
            </PageWrapper>
        </>
    );
};

export default PostDetailPage;
