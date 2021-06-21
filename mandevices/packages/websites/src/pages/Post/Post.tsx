import React, { useState, useEffect } from 'react';
import { PageWrapper } from 'elements/Page';
import SEO from 'common/SEO';
import AuthorRanking from 'components/AuthorRanking';
import { usePostsListsQuery } from 'generated/graphql';
import Loading from 'shared/loading/Loading';
import { useMediaQuery } from 'react-responsive';
import RecentPostListContainer from './RecentPostList';
import PostHighlights from './PostHighlights';
import PostMenu from './PostMenu';
import { HeadPostContainer, Wrapper } from './Post.styled';

const Post: React.FC = () => {
    const [hotPostToShow, setHotPostToShow] = useState(6);
    const { data, loading } = usePostsListsQuery();

    const isLargeScreen = useMediaQuery({
        query: '(min-device-width: 1367px)',
    });
    const isMediumScreen = useMediaQuery({
        query: '(max-device-width: 1366.98px)',
    });
    const isSmallScreen = useMediaQuery({
        query: '(max-device-width: 992px)',
    });

    useEffect(() => {
        if (isLargeScreen) {
            setHotPostToShow(6);
        }
        if (isMediumScreen) {
            setHotPostToShow(4);
        }
        if (isSmallScreen) {
            setHotPostToShow(1);
        }
    }, [isMediumScreen, isLargeScreen, isSmallScreen]);

    const sortedPosts = data?.posts
        ?.slice()
        ?.sort(
            (a, b) =>
                new Date(b?.published_at).getTime() -
                    new Date(a?.published_at).getTime() || 0
        );
    if (loading) return <Loading />;
    return (
        <PageWrapper>
            <SEO title="Bài viết" />
            <Wrapper>
                <HeadPostContainer>
                    <PostHighlights
                        data={sortedPosts?.slice(0, hotPostToShow)}
                    />
                    <PostMenu />
                </HeadPostContainer>
                {sortedPosts?.length && sortedPosts?.length > hotPostToShow && (
                    <RecentPostListContainer
                        data={data?.posts
                            ?.slice(hotPostToShow, sortedPosts?.length)
                            .map((post) => ({
                                ...post,
                                thumbnailUrl:
                                    post?.thumbnail?.formats?.small?.url,
                            }))}
                    />
                )}

                <AuthorRanking />
            </Wrapper>
        </PageWrapper>
    );
};

export default Post;
