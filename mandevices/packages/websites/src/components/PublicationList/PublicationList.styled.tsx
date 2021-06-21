import { paddingLargeCard } from 'common/size';
import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
    background-color: white;
    display: block;
    max-height: 100%;
    ${paddingLargeCard}
    & > h5 {
        margin-top: 20px;
    }

    @media screen and (max-width: 567px) {
        padding: 1rem 0.5rem;
    }
`;

export const Number = styled.div`
    display: block;
    width: 60%;
    height: 40px;
    background-color: #66b3ff;
    font-size: 24px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
    @media screen and (max-width: 992px) {
        width: 100%;
        font-style: oblique;
        color: black;
        background-color: white;
        text-align: left;
        margin-left: 2%;
        margin-top: -10px;
        ::before {
            content: '#';
        }
    }
`;
export const PublicationItem = styled.div`
    display: block;
    max-height: 460px;
    width: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 7px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e4e4e4;
        border-radius: 40px;
        margin-top: 10%;
    }
    & > h5 {
        text-transform: uppercase;
        margin-left: 20px;
        margin-top: 25px;
    }
`;
export const VerticalBar = styled.div`
    display: block;
    max-height: 460px;
    width: 100%;
    overflow-y: scroll;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-row-gap: 20px;
    ::-webkit-scrollbar {
        width: 7px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e4e4e4;
        border-radius: 40px;
        margin-top: 10%;
    }
`;
export const Detail = styled.div`
    width: 96%;
    height: 100%;
    margin-left: 2%;
    border: 1px solid #f2f2f2;

    margin-bottom: 2%;
    & > div {
        padding-top: 2%;
        padding-left: 2%;
        & > p {
            line-height: 20px;
        }
        & > i {
            font-size: 15px;
            line-height: 25px;
            display: block;
        }
        & > i:nth-child(3) {
            color: #707070;
            font-weight: 100;
        }
        & > i:nth-child(4) {
            color: #707070;
            font-weight: 600;
        }
        & > i:nth-child(5) {
            font-weight: 600;
        }
    }
`;
export const TopicItem = styled.div`
    width: 100%;
    align-items: center;
    justify-items: center;
    border: 1px solid #f2f2f2;
    @media screen and (max-width: 992px) {
        height: auto;
        width: auto;
    }
    display: grid;
    grid-template-columns: 1fr 7fr 1.5fr 1.5fr;
    padding: 1rem 0;
    @media screen and (max-width: 992px) {
        display: block;
    }
    p {
        margin: 0;
    }
    & > * {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 992px) {
            justify-content: flex-start;
        }
    }
    @media screen and (max-width: 576px) {
        padding: 0.5rem;
    }
    /* & > p {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 3px solid #f2f2f2;
        @media screen and (max-width: 992px) {
            border: none;
            height: 30px;
        }
    }

    & > p:nth-child(3) {
        text-align: center;

        @media screen and (max-width: 992px) {
            text-align: left;
            font-style: italic;
            font-weight: 200;
            color: #707070;
        }
    }
    & > p:nth-child(4) {
        text-align: center;

        @media screen and (max-width: 992px) {
            padding-left: 2%;
            line-height: 20px;
            font-style: italic;
            color: #707070;
            text-align: left;
        }
    } */
`;
