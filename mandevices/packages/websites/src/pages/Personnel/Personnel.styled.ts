import styled from 'styled-components/macro';

export const Navigation = styled.nav`
    height: 100%;
    position: relative;
    padding: 1.5rem;
    &:after {
        content: '';
        @media screen and (max-width: 992px) {
            content: none;
        }
        border-right: 5px solid rgba(0, 0, 0, 0.1);
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
    }
    a {
        text-decoration: none;
        color: black;
        &.active,
        &:hover {
            color: #0080ff;
        }
    }
    @media screen and (max-width: 576px) {
        padding: 0.5rem;
    }
`;

export const NavigationHead = styled.div`
    display: flex;
    column-gap: 1rem;
    & > a {
        text-decoration: none;
        display: block;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        color: black;
        font-weight: 600;
    }
`;

export const MenuHead = styled.div`
    text-transform: uppercase;
    letter-spacing: -0.04em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuItem = styled.li`
    position: relative;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    a {
        font-weight: 500;
        text-decoration: none;
        min-height: 32px;
        display: flex;
        align-items: center;
    }
    i {
        transition: transform 0.5s ease-in-out;
    }
    transform: rotateZ(0deg);
    &.active i {
        transform: rotateZ(-180deg);
    }

    &:hover {
        cursor: pointer;
    }

    ${MenuHead} {
        font-weight: 500;
        color: black;
        text-transform: none;
        position: relative;
        &:before {
            content: '';
            display: inline-block;
            position: absolute;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 0.5rem;
            border: 0.5px solid rgba(0, 0, 0, 0.3);
            top: 50%;
            left: -1rem;
            transform: translateY(-50%);
        }
    }
`;
export const Menu = styled.ul`
    padding: 0;
    & > li {
        list-style: none;
    }
`;

export const Content = styled.section``;

export const PersonnelWrapper = styled.div`
    background-color: #fff;
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 30% 70%;
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }
`;
