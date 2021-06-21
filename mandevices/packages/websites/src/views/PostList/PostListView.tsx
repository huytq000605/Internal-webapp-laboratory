import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import getImageURL from 'utils/getImageURL';
import { logo } from 'constants/images';
import {
    NewPostImg,
    NewPostItemText,
    NewPostItemTextContent,
    NewPostItemTextInfo,
    NewPostItemTextTitle,
    RecentPostItem,
} from './PostListView.styled';

interface IPost {
    id: string | null;
    thumbnailUrl: string | null;
    title: string | null;
    shortDescription: string | null;
    published_at: Date | null;
}

export interface IPostListView {
    data?: (Partial<IPost> | null)[] | null;
}

const PostListView: React.FC<Partial<IPostListView>> = ({ data }) => {
    return (
        <>
            {data?.map((post) => (
                <RecentPostItem key={post?.id}>
                    <NewPostImg>
                        <img
                            src={
                                post?.thumbnailUrl
                                    ? getImageURL(post?.thumbnailUrl)
                                    : logo
                            }
                            alt="post thumbnail"
                        />
                    </NewPostImg>
                    <NewPostItemText>
                        <NewPostItemTextTitle>
                            <Link to={`/bai-viet/${post?.id}`}>
                                {post?.title}
                            </Link>
                        </NewPostItemTextTitle>
                        <NewPostItemTextContent>
                            {post?.shortDescription}
                        </NewPostItemTextContent>
                        <NewPostItemTextInfo>
                            {dayjs(post?.published_at || undefined).format(
                                'DD/MM/YYYY'
                            )}
                        </NewPostItemTextInfo>
                    </NewPostItemText>
                </RecentPostItem>
            ))}
        </>
    );
};

export default PostListView;
