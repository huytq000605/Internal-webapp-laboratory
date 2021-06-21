import { SmallMediumText } from 'common/typography';
import styled from 'styled-components/macro';

export const ToggleButton = styled.div<{ open?: boolean }>`
    padding: 0 6px;
    position: relative;
    right: 5%;
    display: none;
    cursor: pointer;
    i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        transition: opacity 0.3s ease-in;
        &.bi-x {
            opacity: ${(props) => (props.open ? '100%' : '0')};
        }
        &.bi-list {
            opacity: ${(props) => (props.open ? '0' : '100%')};
        }
    }
    @media (max-width: 1299px) {
        display: unset;
    }
`;

export const MenuItem = styled.li`
    list-style: none;
    ${SmallMediumText}
    a {
        display: block;
        padding: 0 0.5rem;
        border-radius: 5px;
        color: ${(props) => props.theme.colors.onPrimary};
        text-decoration: none;
        letter-spacing: -0.04em;
        &.active,
        &:hover {
            background-color: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.secondary};
        }
    }
`;

export const Menu = styled.ul<{ open?: boolean }>`
    margin: 0;
    display: flex;
    padding-right: 24px;
    min-width: 250px;
    ${MenuItem} {
        margin-right: 12px;

        &:last-child {
            margin-right: 0;
        }
    }
    @media (max-width: 1299px) {
        ${MenuItem} {
            margin-right: 0;
            & > a {
                font-size: 1rem;
                padding: 0.5rem 0;
            }
        }
        padding-top: ${(props) => props.theme.dimensions.appBarHeight};
        position: fixed;
        right: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        color: red;
        top: 0;
        background-color: white;
        clip-path: circle(10px at 100% -5%);
        transition: clip-path 0.5s ease-in-out;
        ${(props) => props.open && `clip-path: circle(2000px at 100% -5%);`}
    }
    @media (max-width: 576px) {
        width: 100%;
        left: 0;
    }
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding-left: 80px;
    z-index: 100000;
    height: ${(props) => props.theme.dimensions.appBarHeight};
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: space-between;
    width: 100vw;
    @media screen and (max-width: 1400px) {
        padding-left: 1rem;
        li {
            font-size: 0.8rem;
        }
    }
    @media screen and (max-width: 1300px) {
        img {
            transform: scale(0.8);
        }
    }
    @media screen and (max-width: 575.98px) {
        height: 3rem;
        padding-left: unset;
    }
`;

export const Logo = styled.img`
    @media screen and (max-width: 575.98px) {
        transform: scale(0.5);
    }
`;
