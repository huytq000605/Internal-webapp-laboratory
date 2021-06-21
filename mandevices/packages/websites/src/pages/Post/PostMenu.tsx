import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { usePostCategoriesQuery } from 'generated/graphql';
import {
    PostCategoryContainer,
    PostCategoryHead,
    PostTitleIcon,
    PostTitleText,
    PostCategoryMenu,
    PostMenuItem,
    ParentItem,
    ParentItemText,
    SubItem,
    SubItemIcon,
    SubItemText,
} from './Post.styled';

const MenuItemLink: React.FC<{
    label?: string | null;
    to: string;
    length: number | undefined;
}> = ({ label, to, length }) => {
    return (
        <Route
            path={to}
            // eslint-disable-next-line react/no-children-prop
            children={({ match }) => {
                const active = match ? 'activeLink' : '';
                return (
                    <SubItem className={active}>
                        <NavLink to={to}>
                            <SubItemIcon />
                            <SubItemText>
                                {label}
                                <span>({length})</span>
                            </SubItemText>
                        </NavLink>
                    </SubItem>
                );
            }}
        />
    );
};

const PostMenu = () => {
    const { data } = usePostCategoriesQuery();

    const postCatagories = data?.postCategories;
    const rootPostCategories = postCatagories?.filter(
        (postCategory) => !postCategory?.parentCategory
    );

    return (
        <PostCategoryContainer>
            <PostCategoryHead>
                <PostTitleIcon />
                <PostTitleText>Danh mục bài viết</PostTitleText>
            </PostCategoryHead>
            <PostCategoryMenu>
                {rootPostCategories?.map((rootPostCategory) => {
                    const subPostCategories = postCatagories?.filter(
                        (postCategory) => {
                            return (
                                postCategory?.parentCategory?.name ===
                                rootPostCategory?.name
                            );
                        }
                    );

                    return (
                        <PostMenuItem key={rootPostCategory?.id}>
                            <ParentItem>
                                <NavLink
                                    to={`/danh-muc-bai-viet/${rootPostCategory?.id}`}
                                >
                                    <i className="bi bi-caret-down-fill" />
                                    <ParentItemText>
                                        {rootPostCategory?.name}
                                        <span>
                                            ({rootPostCategory?.posts?.length})
                                        </span>
                                    </ParentItemText>
                                </NavLink>
                            </ParentItem>
                            {subPostCategories?.map((subPostCategory) => {
                                return (
                                    <MenuItemLink
                                        key={subPostCategory?.id}
                                        to={`/danh-muc-bai-viet/${subPostCategory?.id}`}
                                        label={subPostCategory?.name}
                                        length={subPostCategory?.posts?.length}
                                    />
                                );
                            })}
                        </PostMenuItem>
                    );
                })}
            </PostCategoryMenu>
        </PostCategoryContainer>
    );
};

export default PostMenu;
