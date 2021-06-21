import { NarrowTinyLargeMediumText } from 'common/typography';
import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    display: block;
    background-color: white;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    row-gap: 2.5rem;
    column-gap: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem 4rem;
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
        padding: 1.5rem 2rem;
    }
    @media screen and (max-width: 360px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`;

export const NominalRole = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: -0.04rem;
`;

export const Name = styled(NominalRole)`
    font-size: 1rem;
    margin-top: 0.5rem;
    font-weight: bold;
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    & > i {
        font-size: 18px;
        color: black;
        line-height: 0;
        &.bi-check-circle-fill {
            color: green;
        }
    }
    ${NarrowTinyLargeMediumText} {
        display: inline-block;
    }
`;

export const Target = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const Item = styled.div``;
