import React from 'react';
import { PostItemFragment } from 'generated/graphql';
import { Link } from 'react-router-dom';
import {
    PostHighlightsFirst,
    PostHighlightsFirstTitle,
    PostHighlightsFirstContent,
    PostHighlightsInfo,
    HotPostsWrapper,
} from './Post.styled';
import PostThumbnail from './PostThumbnail';

interface IPostHighLight {
    data?: (PostItemFragment | null)[] | null;
}

const PostHighlights: React.FC<IPostHighLight> = ({ data }) => {
    return (
        <HotPostsWrapper>
            {data?.map((post) => (
                <PostHighlightsFirst key={post?.id}>
                    <PostThumbnail url={post?.thumbnail?.url} />
                    <PostHighlightsFirstTitle>
                        <Link to={`/bai-viet/${post?.id}`}>{post?.title}</Link>
                    </PostHighlightsFirstTitle>
                    <PostHighlightsInfo>
                        {/* TODO: Xử lý để hiển thị hết các danh mục của bài viết */}
                        {post?.categories?.[0]?.name}
                    </PostHighlightsInfo>
                    <PostHighlightsFirstContent>
                        {post?.shortDescription}
                    </PostHighlightsFirstContent>
                </PostHighlightsFirst>
            ))}
        </HotPostsWrapper>
    );
};

export default PostHighlights;
