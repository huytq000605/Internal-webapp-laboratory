import { usePostsQuery } from 'generated/graphql';
import React from 'react';
import Post from './Post';

const PostsContainer: React.FC = () => {
    const { data } = usePostsQuery();
    return (
        <>
            <h5>Tin mới nhất</h5>
            <br />
            {data?.posts?.map((post) => (
                <Post
                    key={post?.id}
                    data={{ ...post, thumbnail: post?.thumbnail?.url }}
                />
            ))}
        </>
    );
};

export default PostsContainer;
