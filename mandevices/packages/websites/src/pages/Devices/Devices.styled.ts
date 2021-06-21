import { SlideBlock, SlideCaptionWrapper } from 'blocks/Slide2/Slide2.styled';
import styled from 'styled-components/macro';

export const Info = styled.div``;

export const Menu = styled.div`
    position: relative;
    height: 100%;
    background: #ffffff;
    border: 2px solid #fff;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    &::before {
        width: 3px;
        height: 100%;
        background: #f2f3f4;
        position: absolute;
        right: 0;
        top: 0;
    }
`;
export const Wrapper = styled.div`
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
    @media (max-width: 576px) {
        margin: 0;
    }
`;
export const MenuHead = styled.h3`
    padding: 17px 0 17px 26px;
`;
export const MenuList = styled.div``;
export const MenuItem = styled.div`
    padding-left: 26px;
    width: calc(100% + 6px);
    display: flex;
    align-items: center;
    height: 48px;
    & > a {
        text-decoration: none;
        color: black;
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        height: 48px;
        & > i {
            width: 20px;
            position: relative;
            top: -2px;
            font-size: 8px;
        }
    }
    &:hover a {
        color: #13bebe;
    }
    &.activeLink {
        background: #f2f9ff;
        & > a {
            color: #52a9ff;
            border-right: 4px solid #52a9ff;
        }
        & > i {
            color: black;
            font-weight: 700;
        }
    }
`;
export const MenuItemText = styled.div``;
export const Content = styled.div`
    height: 100%;
    display: block;
    padding: 1.5rem 2rem;
    background: #ffffff;
    border: 2px solid #fff;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    @media screen and (max-width: 576px) {
        padding: 0.5rem;
        padding-bottom: 2rem;
    }
`;
export const ContentTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 1rem;
    & > span {
        text-transform: lowercase;
    }
`;
export const DeviceList = styled.div`
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e4e4e4;
        border-radius: 40px;
    }
    display: grid;
    height: 70%;
    max-width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1.2fr;
    row-gap: 2rem;
    column-gap: 2rem;
    @media (max-width: 1199.98px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }
    @media (max-width: 991.98px) {
        grid-template-columns: 1;
        grid-gap: 30px;
    }
    @media (max-width: 767.98px) {
        grid-template-columns: 1fr;
    }
`;
export const DeviceItem = styled.div`
    border: 1px solid ${(props) => props.theme.colors.surfaceVariant};

    li {
        border-top: 1px solid ${(props) => props.theme.colors.surfaceVariant};
    }
    &,
    img {
        object-fit: cover;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    *:before {
        content: unset;
    }
    ${SlideBlock} {
        ${SlideCaptionWrapper} {
            height: max-content;
        }
        height: 100%;
        grid-template-rows: 1fr 3.5rem;
    }
`;
export const DeviceName = styled.div`
    font-size: 1rem;
    font-weight: 600;
`;
