import React from 'react';
import PostListView, { IPostListView } from 'views/PostList/PostListView';
import {
    RecentPostContainer,
    NewPostTitle,
    PostTitleIcon,
    PostTitleText,
    RecentPostListContainer,
} from './Post.styled';

const RecentPostList: React.FC<IPostListView> = ({ data }) => {
    return (
        <RecentPostContainer>
            <NewPostTitle>
                <PostTitleIcon />
                <PostTitleText className="newPost">
                    Bài viết gần đây
                </PostTitleText>
            </NewPostTitle>
            <RecentPostListContainer>
                <PostListView data={data} />
                {/* <SeeMoreButton onClick={addItemView}>Xem thêm</SeeMoreButton>	 */}
            </RecentPostListContainer>
        </RecentPostContainer>
    );
};

export default RecentPostList;
