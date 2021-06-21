import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    display: grid;
    row-gap: 2rem;
    width: 100%;
    grid-template-columns: 2fr 1fr;
    column-gap: 1.5rem;
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

export const HotPostsWrapper = styled.div`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: minmax(100px, auto);
`;

export const PostHighlightsFirst = styled.div`
    max-height: 680px;
    width: 100%;
    overflow: hidden;
    border-radius: 17px;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto auto;

    & > img {
        display: block;
        width: 100%;
        object-fit: contain;
        object-position: center;
        margin: 0;
        padding: 0;
    }
`;

export const PostCategoryContainer = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    background-color: #ffffff;
`;
export const HeadPostContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 300px);
    grid-gap: 1.5rem;
    grid-column: 1 / 3;
    @media screen and (max-width: 992px) {
        grid-column: unset;
    }
    @media (max-width: 1199.98px) {
        display: grid;
        grid-template-columns: 1fr minmax(auto, 300px);
        grid-gap: 10px;
    }

    @media (max-width: 767.98px) {
        height: auto;
        grid-template-columns: 1fr;
        & > ${PostCategoryContainer} {
            height: max-content;
        }
    }
    @media (max-width: 576px) {
        height: auto;
        margin: 0;
        grid-template-columns: 1fr;
        & > ${PostCategoryContainer} {
            height: max-content;
        }
    }
`;

export const PostHighlightsFirstTitle = styled.div`
    padding: 0px 15px;
    font-weight: 600;
    font-size: 22px;
`;
export const PostHighlightsFirstContent = styled.div`
    padding: 0px 15px 15px 15px;
    font-size: 16px;
    font-weight: 500;
`;

export const PostHighlightsInfo = styled.div`
    padding: 0px 10px 5px 15px;
    @media (max-width: 1199.98px) {
        display: none;
    }
`;

export const PostCategoryHead = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    position: relative;
    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 120px;
        border-radius: 5px;
        height: 5px;
        background-color: #13bebe;
        left: 50px;
        bottom: 0;
    }

    @media (max-width: 767.98px) {
        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 120px;
            border-radius: 5px;
            height: 5px;
            background-color: #13bebe;
            left: 50px;
            bottom: 0;
        }
    }
`;
export const PostTitleIcon = styled.div`
    background-color: #13bebe;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    position: relative;
    top: 1px;
    & ::after {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 3px;
        position: absolute;
        background-color: white;
        top: 8px;
        left: 8px;
        box-shadow: 2px 2px 2px #999999;
    }
`;
export const PostTitleText = styled.h2`
    text-transform: uppercase;
    padding-left: 25px;
    font-size: 18px;
    font-weight: 700;
    color: #13bebe;
    display: flex;
    align-items: center;
`;
export const PostCategoryMenu = styled.div`
    margin-top: 1rem;
`;
export const PostMenuItem = styled.div``;
export const ParentItem = styled.div`
    & > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        & > i {
            color: #13bebe;
            font-size: 25px;
            position: relative;
            top: -2px;
        }
    }
`;
export const ParentItemText = styled.div`
    text-transform: uppercase;
    color: #000000;
    font-weight: 700;
    padding-left: 10px;
    & > span {
        font-weight: 500;
        padding-left: 10px;
        color: #7f7f7f;
    }
`;
export const SubItem = styled.div`
    & > a {
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 5px 0px 5px 25px;
    }
`;
export const SubItemIcon = styled.div`
    background: #13bebe;
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const SubItemText = styled.div`
    color: #000000;
    font-weight: 600;
    padding-left: 10px;

    & > span {
        font-weight: 500;
        padding-left: 10px;
        color: #7f7f7f;
    }
`;
export const RecentPostContainer = styled.div`
    border-radius: 17px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    background: #fff;
`;
export const NewPostTitle = styled.div`
    width: 100%;
    padding: 30px 30px 10px 30px;
    display: flex;
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 120px;
        border-radius: 5px;
        height: 5px;
        background-color: #707070;
        left: 50px;
        bottom: 0;
    }
`;
export const RecentPostListContainer = styled.div`
    padding: 20px 30px;
    width: 100%;
    display: grid;
    row-gap: 2.5rem;
    @media (max-width: 576px) {
        height: auto;
        padding: 0 1rem;
    }
`;

export const SeeMoreButton = styled.div`
    text-align: center;
    width: 100%;
    background: #13bebe;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 1rem;
    padding: 5px;
`;
