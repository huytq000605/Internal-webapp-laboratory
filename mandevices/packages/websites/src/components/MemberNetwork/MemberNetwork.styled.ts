import styled from 'styled-components/macro';

export const Infos = styled.article`
    padding-right: 6rem;
    @media screen and (max-width: 992px) {
        padding-right: 0;
    }
`;
export const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    @media screen and (max-width: 992px) {
        grid-template-columns: auto;
        row-gap: 2rem;
    }
`;
export const Info = styled.div``;
export const Heading = styled.h5``;
export const Content = styled.div``;
