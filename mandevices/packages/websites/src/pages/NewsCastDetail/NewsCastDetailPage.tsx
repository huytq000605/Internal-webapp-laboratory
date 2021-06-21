import { PageWrapper } from 'elements/Page';
import React from 'react';
import { useNewsCastDetailQuery } from 'generated/graphql';
import Loading from 'shared/loading/Loading';
import MarkDown from 'shared/MarkDown';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import SEO from 'common/SEO';
import { NewsCastDetailContainer, Wrapper } from './NewsCastDetail.styled';

const NewsCastDetailPage = () => {
    const { id } = useParams<{ id: string }>();

    const { loading, data } = useNewsCastDetailQuery({ variables: { id } });

    const title = data?.newscast?.title;
    const content = data?.newscast?.content;

    if (loading) return <Loading />;
    return (
        <Wrapper>
            <PageWrapper>
                <SEO
                    title={title}
                    description={content}
                    type="article"
                    imageUrl={data?.newscast?.thumbnail?.url}
                    imageAlt={data?.newscast?.thumbnail?.caption}
                />
                <Breadcrumb>
                    <Breadcrumb.Item href="#">
                        <Link to="/">Trang chủ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {/* TODO: fix error throw console log: <a> cannot appear as a descendant of <a>.  */}
                        <Link to="/tin-tuc-su-kien">Tin tức - sự kiện</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {data?.newscast?.title}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <NewsCastDetailContainer>
                    <h3>{data?.newscast?.title}</h3>

                    <MarkDown>{content}</MarkDown>
                </NewsCastDetailContainer>
            </PageWrapper>
        </Wrapper>
    );
};

export default NewsCastDetailPage;
