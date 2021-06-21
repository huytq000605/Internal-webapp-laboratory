import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostListByCategoryQuery } from 'generated/graphql';
import { PageWrapper } from 'elements/Page';
import PostListView from 'views/PostList/PostListView';
import BreadcrumbView from 'views/Breadcrumb/BreadcrumbView';
import Panel from 'elements/Panel';
import Wrapper from './PostListByCategory.styled';

const PostListByCategory = () => {
    const { id } = useParams<{ id: string }>();

    const { data } = usePostListByCategoryQuery({
        variables: { categoryId: id },
    });

    return (
        <PageWrapper>
            <Wrapper>
                <BreadcrumbView
                    data={[
                        { link: '/', name: 'Trang chủ' },
                        { link: '/bai-viet', name: 'Bài viết' },
                        {
                            link: `/danh-muc-bai-viet/${id}`,
                            name: data?.posts?.[0]?.categories?.find(
                                (category) => category?.id === id
                            )?.name,
                        },
                    ]}
                />
                <Panel>
                    <PostListView
                        data={data?.posts?.map((post) => ({
                            ...post,
                            thumbnailUrl:
                                post?.thumbnail?.formats?.thumbnail?.url,
                        }))}
                    />
                </Panel>
            </Wrapper>
        </PageWrapper>
    );
};

export default PostListByCategory;
