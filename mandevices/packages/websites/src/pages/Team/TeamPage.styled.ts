import { PageWrapper } from 'elements/Page';
import styled from 'styled-components/macro';

export const Root = styled.div`
    /* ${PageWrapper} {
        padding-left: 0;
        padding-right: 0;
    } */
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 5px;

    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        grid-row-gap: 5px;
    }
    @media screen and (max-width: 768px) {
        height: auto;
    }
`;
export const LeftMenu = styled.div`
    background-color: white;
    max-height: 100%;

    & > p {
        padding-top: 13px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
    }
    @media screen and (max-width: 992px) {
        margin: 0 0.5rem;
    }
    @media screen and (max-width: 768px) {
        margin: 0 1rem;
    }
`;
export const MenuItem = styled.ul`
    padding: 0;
    list-style: circle;
    & > h6 {
        font-size: 18px;
        color: #7f7f7f;
        padding-left: 5%;
    }
    & > h5 {
        font-size: 18px;
        color: #7f7f7f;
        padding-left: 5%;
        margin-bottom: 40px;
        margin-top: 30px;
    }
`;
export const MenuItemActive = styled.li`
    width: calc(100% + 4px);
    display: flex;
    align-items: center;
    line-height: 24px;
    min-height: 48px;
    padding: 5px 5%;
    margin-bottom: 5px;

    & > i {
        width: 20px;
        position: relative;
        top: -2px;
        font-size: 8px;
    }

    & > a {
        text-decoration: none;
        color: black;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
    }
    &:hover a {
        color: ${(props) => props.theme.colors.colorMenuActive};
        @media screen and (max-width: 992px) {
            border: none;
            width: 100%;
        }
    }
    &.activeLink {
        list-style: circle;
        background-color: ${(props) => props.theme.colors.backgroundMenuActive};
        border-right: 4px solid #0080ff;
        @media screen and (max-width: 992px) {
            border: 0.5px solid #f1e1e1;
            width: 100%;
        }
        & > a {
            color: #52a9ff;
        }
    }
`;
