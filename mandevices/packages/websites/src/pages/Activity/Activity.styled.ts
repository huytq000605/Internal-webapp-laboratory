import { NormalSemiBoldText } from 'common/typography';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { HomeSlideWrapper } from 'pages/Home/HomePage.styled';

const videoTitleHeight = '108px';

export const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 40vw;
    row-gap: 2rem;
    h1 {
        font-weight: 900;
        color: ${(props) => props.theme.colors.secondaryVariant};
        letter-spacing: -0.04em;
        margin: 0;
    }
    button {
        font-weight: 600;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        @media screen and (max-width: 1536px) {
            font-size: 1.25rem;
            padding: 0.5rem;
        }
        @media screen and (max-width: 1366px) {
            font-size: 1rem;
            padding: 0.25rem 0.5rem;
        }
    }
    @media screen and (max-width: 1366px) {
        row-gap: 1.25rem;
    }
    @media screen and (max-width: 576px) {
        max-width: 45vw;
        row-gap: 0.5rem;
        h1 {
            font-weight: 700;
        }
        button {
            display: none;
        }
    }
`;

export const Wrapper = styled.div`
    h2 {
        font-weight: 600;
        text-align: center;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
    h3 {
        margin: 1.5rem 0;
    }
    & .dropdown-menu {
        max-width: 100vw;
    }
    & > ${HomeSlideWrapper} {
        position: relative;
        ${TitleWrapper} {
            position: absolute;
            right: 0;
            top: 15%;
            margin-right: 3rem;
            @media screen and (max-width: 576px) {
                margin-right: 1rem;
                top: 10%;
            }
        }
    }
    @media screen and (max-width: 1536px) {
        h2 {
            margin: 1.25rem 0;
        }
        h3 {
            margin: 1rem 0;
        }
    }
    @media screen and (max-width: 1366px) {
        h2 {
            margin: 1rem 0;
        }
        h3 {
            margin: 0.75rem 0;
        }
    }
    @media screen and (max-width: 576px) {
        h2 {
            margin: 0.75rem 0;
        }
        h3 {
            margin: 0.5rem 0;
        }
    }
    @media screen and (max-width: 360px) {
        h2 {
            margin: 0.5rem 0;
        }
        h3 {
            margin: 0.5rem 0;
        }
    }
`;

export const VideoWrapper = styled.div`
    height: ${(props) =>
        `calc(100vh - ${props.theme.dimensions.appBarHeight})`};
    iframe {
        height: ${(props) =>
            `calc(100vh - ${props.theme.dimensions.appBarHeight} - ${videoTitleHeight})`};
        @media screen and (max-width: 1200px) {
            height: ${(props) =>
                `calc(100vh - ${props.theme.dimensions.appBarHeight} )`};
        }
    }
    & .slick-dots {
        position: absolute;
        left: 0;
        right: 0;
        bottom: calc(${videoTitleHeight} - 1.5rem);
    }
    @media screen and (max-width: 1200px) {
        display: none;
        /* height: calc(100vw * 9 / 16);
        margin-top: ${(props) => props.theme.dimensions.appBarHeight};
        & * {
            height: 100%;
        } */
    }
`;

export const VideoTitleWrapper = styled.div`
    height: ${videoTitleHeight};
    background-color: ${(props) => props.theme.colors.surface};
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    h3 {
        margin-top: 0.75rem;
        margin-bottom: 0;
    }
    h4 {
        font-style: italic;
        margin-top: 0.25rem;
    }
`;

export const ImageGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
    @media screen and (max-width: 1600px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
    }
    @media screen and (max-width: 768px) {
        grid-gap: 0.5rem;
    }
`;

export const ImageWrapper = styled(motion.div)`
    height: 0;
    overflow: hidden;
    padding: 50% 0;
    position: relative;
    opacity: 0.8;
    img {
        object-fit: cover;
        position: absolute;
        min-width: 100%;
        min-height: 100%;

        top: 0;
        left: 0;
        max-width: 150%;
    }
`;

export const ActivityWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    padding-top: 0;
    & > ${NormalSemiBoldText} {
        margin-bottom: 3.5rem;
    }
    img {
        width: 100%;
    }
    @media screen and (max-width: 1000px) {
        ${NormalSemiBoldText} {
            margin-bottom: 1.5rem;
        }
    }
    @media screen and (max-width: 768px) {
        ${NormalSemiBoldText} {
            margin-bottom: 0.5rem;
        }
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr 1fr;
        padding: 0.5rem;
        padding-top: 0;
    }
`;
