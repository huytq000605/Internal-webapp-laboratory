import styled from 'styled-components/macro';
import { NarrowTinyLargeBoldText } from 'common/typography';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 1rem;
    display: grid;
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

export const RecentNewHeadWrapper = styled.div`
    ${NarrowTinyLargeBoldText} {
        display: inline-block;
        text-transform: uppercase;
    }
`;

export const RecentNewsWrapper = styled.div`
    max-height: 100%;
    display: block;
    background: white;
    border-radius: 20px;
    padding: 1.5rem 2rem;
    padding-right: 0;
    @media screen and (max-width: 567px) {
        padding-left: 1rem;
    }
    & > p {
        margin-top: -40px;
        margin-left: 30px;
        font-size: 20px;
        font-weight: bold;
        max-width: 100px;
        border-bottom: 5px solid #12bdbd;
        padding-bottom: 5px;
    }
`;

export const Icon = styled.img``;
export const ScrollBar = styled.div`
    width: 100%;
    max-height: 460px;
    overflow-y: scroll;
    display: grid;
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
        row-gap: 2rem;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap: 1rem;
    }
    ::-webkit-scrollbar {
        width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e4e4e4;
        border-radius: 40px;
        margin-top: 10%;
    }
`;
