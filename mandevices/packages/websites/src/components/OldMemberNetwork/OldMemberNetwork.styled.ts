import styled from 'styled-components/macro';
import worldmap from 'assets/worldmap.png';

export const Brands = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    column-gap: 2rem;
    row-gap: 1.5rem;
    padding: 0 5rem;
    img {
        width: 100%;
    }
    @media screen and (max-width: 991.98px) {
        padding: 0 4rem;
    }
    @media screen and (max-width: 767.98px) {
        grid-template-columns: repeat(3, 1fr);
        padding: 0;
    }
    & > div {
        max-width: 130px;
    }
`;

export const WorldMap = styled.div`
    background-image: url(${worldmap});
    min-height: 600px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 575.98px) {
        padding: 2rem;
    }
`;

export const Countries = styled.div`
    display: grid;
    justify-content: center;
    row-gap: 1rem;
    grid-template-columns: auto auto;
    @media screen and (max-width: 575.98px) {
        grid-template-columns: auto;
    }
`;

export const CountryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const Country = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    p {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
    }
`;
export const University = styled.div`
    display: grid;
    grid-template-columns: 1rem 1fr;
    align-items: center;
    column-gap: 0.5rem;
    p {
        margin: 0;
        font-size: 1.125rem;
        font-weight: bold;

        &:nth-child(2) {
            text-transform: uppercase;
        }
        &:nth-child(3) {
            grid-column: 2/3;
            opacity: 50%;
        }
    }
    @media screen and (max-width: 576px) {
        & > p {
            font-size: 1rem;
        }
    }
`;

export const School = styled.div``;
