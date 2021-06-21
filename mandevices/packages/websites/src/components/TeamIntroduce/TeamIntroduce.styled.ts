import styled from 'styled-components/macro';

export const MemberWrapper = styled.div`
    margin-left: 1.5rem;
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    display: grid;
    align-items: start;
    grid-auto-rows: min-content;
    row-gap: 1rem;
    @media screen and (max-width: 768px) {
        grid-row: 1 / 2;
        margin-left: unset;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    padding-top: 1.5rem;
    padding-top: 0;
    row-gap: 1rem;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
        ${MemberWrapper} {
            grid-row: 2 / 3;
        }
    }
    @media screen and (max-width: 576px) {
        padding: 0.5rem;
    }
`;

export const Body = styled.div`
    background-color: ${(props) => props.theme.colors.surface};
    padding-bottom: 1rem;
    & > div:nth-child(2) {
        margin: 0 1rem;
    }
    & > .nav {
        margin-bottom: 1rem;
    }
`;
