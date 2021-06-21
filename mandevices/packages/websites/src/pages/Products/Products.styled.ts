import { SlideCaptionWrapper } from 'blocks/Slide2/Slide2.styled';
import styled from 'styled-components/macro';
// menu
export const Container = styled.div``;
export const Menu = styled.div`
    position: relative;
    max-height: 100%;
    background: #ffffff;
    border: 2px solid #fff;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    &::before {
        width: 3px;
        height: 100%;
        background: #f2f3f4;
        position: absolute;
        right: 0;
        top: 0;
    }
`;
export const ProductsContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3.3fr;
    grid-gap: 4px;
    @media (max-width: 1199.98px) {
        grid-template-columns: 1fr 2.8fr;
        grid-gap: 4px;
    }
    @media (max-width: 991.98px) {
        grid-template-columns: 1fr 1.5fr;
        grid-gap: 4px;
    }
    @media (max-width: 767.98px) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
        ${Menu} {
            height: auto;
        }
    }
`;
export const ProductsSidebar = styled.div``;

export const MenuHead = styled.div`
    font-size: 18px;
    color: #79797a;
    font-weight: 700;
    padding: 17px 0 17px 26px;
`;
export const MenuList = styled.div``;
export const MenuItemTimeList = styled.div`
    display: none;
    position: relative;
    top: 100%;
    left: 0;
`;
export const MenuItem = styled.div`
    cursor: pointer;
    position: relative;
    border-top: 1px solid #f1e8e8;
    &.active {
        display: block;
        background: #f2f9ff;
        width: calc(100% + 6px);
        height: 100%;
        border-right: 4px solid #52a9ff;
        & > a {
            color: #52a9ff;
        }
        & > ${MenuItemTimeList} {
            display: block;
        }
    }
`;
export const MenuItemNav = styled.div`
    padding-left: 26px;
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    & > i {
        width: 20px;
        position: relative;
        top: -2px;
        font-size: 8px;
    }

    & > a {
        text-decoration: none;
        color: black;
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        height: 48px;
    }
`;
export const MenuItemText = styled.div`
    padding-left: 4px;
`;
export const MenuItemTimeItem = styled.div`
    padding-left: 50px;
    height: 40px;
    line-height: 40px;
    &:first-child {
        /* border-top: 1px solid #f1e8e8; */
    }
    &:last-child {
        /* border-bottom: 2px solid #fff; */
        border-bottom-left-radius: 3px;
    }
    & > a {
        text-decoration: none;
        color: black;
        display: block;
        width: 100%;
        height: 100%;
    }
    &.activeLink {
        display: block;
        background: #f2f9ff;
        width: calc(100% + 6px);
        height: 100%;
        border-right: 4px solid #52a9ff;
        & > a {
            color: #52a9ff;
        }
    }
    &:hover a {
        color: #52a9ff;
    }
    & > a {
        display: block;
        width: calc(100% + 6px);
        height: 100%;
    }
`;
// content
export const Title = styled.div`
    height: 24px;
    display: flex;
    align-items: center;

    & > img {
        display: block;
        width: 16px;
    }
`;
export const Text = styled.div`
    font-size: 16px;
    padding-left: 8px;
    line-height: 24px;
    font-weight: 600;
    color: #333333;
`;
export const Wrapper = styled.div`
    height: 100%;
    background: #ffffff;
    border: 2px solid #fff;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    padding: 1.5rem 2rem;
    h2 {
        display: flex;
        align-items: center;
        span {
            display: inline-block;
            text-align: center;
            font-size: 1rem;
            font-weight: bold;
            width: 2.5rem;
            height: 2.5rem;
            margin: 0 1rem;
            border-radius: 50%;
            line-height: 2.5rem;
            color: ${(props) => props.theme.colors.onSecondary};
            background-color: ${(props) => props.theme.colors.secondary};
        }
    }
    @media screen and (max-width: 568px) {
        & > h2 {
            font-weight: bold;
            display: flex;
            align-items: center;
            margin-left: 0.5rem;
        }
        padding: 0;
    }
`;
export const ProductList = styled.div`
    padding: 1rem 0;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e4e4e4;
        border-radius: 40px;
    }
`;
export const ContentTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: #000000;
    margin: 17px 0px 30px 40px;
`;
export const SlideWrapper = styled.div`
    *:before {
        content: unset;
    }
    ${SlideCaptionWrapper} {
        box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
    }
`;
export const Info = styled.div``;

export const ProductItem = styled.div`
    margin-left: 60px;
    margin-right: 10px;
    display: grid;
    max-width: 100%;
    grid-template-columns: 1.9fr 1.3fr;
    grid-gap: 2rem;
    @media (max-width: 1199.98px) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
        margin: 10px 40px;
        & > ${Info}, & > ${SlideWrapper} {
            height: auto;
        }
        & > ${SlideWrapper} {
        }
    }
    @media (max-width: 991.98px) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
        margin: 20px 20px;

        & > ${Info}, & > ${SlideWrapper} {
            height: auto;
        }
        & > ${SlideWrapper} {
        }
    }
    @media (max-width: 767.98px) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
        margin: 10px 20px;
        & > ${Info}, & > ${SlideWrapper} {
            height: auto;
        }
        & > ${SlideWrapper} {
            margin: 20px auto;
        }
    }
    @media (max-width: 576px) {
        margin: 0.5rem;
    }
`;

export const ContentInforTextMain = styled.div`
    margin-left: 20px;
`;
export const ProductName = styled.div`
    display: flex;
    height: 53px;
    align-items: center;
    & > div {
        position: relative;
        height: 37px;
        padding: 0px 28px;
        border-radius: 2px;
        background-color: #0080ff;
        color: #ffffff;
        font-size: 24px;
        &::after {
            content: '';
            position: absolute;
            width: 1px;
            height: 48px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #bbb9b9;
            right: -10px;
        }
    }
    & > h3 {
        margin-bottom: 0;
        margin-left: 19px;
        font-size: 16px;
        font-weight: 600;
    }
`;
export const FunctionItem = styled.div`
    display: flex;
    align-items: center;
    padding-top: 15px;
    padding-left: 15px;

    & > img {
        width: 20px;
    }
`;
export const FunctionItemText = styled.div`
    padding-left: 10px;
`;
export const Function = styled.div`
    margin-top: 36px;
`;

export const ExtraInfo = styled.div`
    margin-top: 20px;
`;
export const PerformerList = styled.div``;
export const PerformerItemName = styled.span`
    font-weight: 600;
`;
export const PerformerItemPosition = styled.span`
    padding-left: 5px;
`;
export const PerformerItemCourses = styled.span`
    padding-left: 5px;
    margin-bottom: 0;
`;
export const PerformerItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 0.3fr;
    margin: 20px 20px 0px 20px;
    @media (max-width: 1199.98px) {
        grid-template-columns: 2.2fr 1.8fr 0.8fr;
        margin: 20px 0px 0px 20px;
    }
    @media (max-width: 991.98px) {
        grid-template-columns: 1fr;
        & > ${PerformerItemPosition}, & > ${PerformerItemCourses} {
            font-weight: 200;
            font-size: 15px;
        }
    }
`;
export const Performer = styled.div`
    margin-top: 20px;
`;
export const Advisor = styled.div`
    margin-top: 20px;
`;
export const AdvisorList = styled.div`
    padding-bottom: 20px;
`;
export const AdvisorItem = styled.div`
    padding-top: 15px;
    padding-left: 20px;
    font-weight: 700;
`;
export const WPSlider = styled.div`
    overflow: hidden;
`;
