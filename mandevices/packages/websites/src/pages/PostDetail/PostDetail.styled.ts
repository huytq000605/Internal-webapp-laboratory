import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    display: grid;
    width: 100%;
    max-width: 1000px;
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    & > ul {
        padding: 0;
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
        ul {
            grid-row: 1 / 2;
        }
    }
`;

export const ThumbnailWrapper = styled.figure`
    margin: auto;
    margin-bottom: 1rem;
    img {
        display: inline-block;
        margin-bottom: 0.5rem;
        max-width: 100%;
    }
`;

export const PublishedAt = styled.div``;

export const AuthorAvatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
`;

export const Author = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 0.5rem;
    margin-bottom: 3rem;
    margin-top: 0.5rem;
    ${AuthorAvatar} {
        grid-row: 1 / 3;
    }
    @media screen and (max-width: 576px) {
        margin-bottom: 0.5rem;
    }
`;

export const Title = styled.h3`
    margin-top: 1rem;
    @media screen and (max-width: 576px) {
        margin-top: 1rem;
    }
`;
