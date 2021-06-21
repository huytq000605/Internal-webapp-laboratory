import TitleBlock from 'blocks/Title';
import styled, { keyframes } from 'styled-components/macro';
import Img from 'react-cool-img';

export const Info = styled.div`
    display: grid;
    row-gap: 1.5rem;
`;
export const SlideCaptionList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
`;

export const SlideCaptionWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: white;
    border-bottom-right-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
    position: relative;
`;

export const SlideCaption = styled.li`
    width: 100%;
    height: 5rem;
    flex-shrink: 0;
    padding-left: 1.875rem;
    padding-right: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    letter-spacing: -0.04em;
    &:first-child {
        right: 0;
    }
`;
export const SlideIndicator = styled.div`
    display: flex;
    column-gap: 0.5rem;
`;

export const SlideImageWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    overflow: hidden;
`;

export const SlideImage = styled(Img)`
    border-top-right-radius: 1.25rem;
    border-top-left-radius: 1.25rem;
    width: 100%;
    object-fit: cover;
`;
export const Slide = styled.div`
    height: 28.25rem;
    max-width: 26.125rem;
    display: grid;
    grid-template-rows: 22.5rem 5rem;
    position: relative;
    justify-self: center;
    ${SlideIndicator} {
        bottom: 6.125rem;
        left: 1.875rem;
        position: absolute;
    }
    &:before {
        position: absolute;
        z-index: -1;
        content: '';
        max-width: 30.75rem;
        width: 120%;
        height: 70%;
        max-height: 18.75rem;
        background-color: rgba(19, 190, 190, 0.4);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-5deg);
        border-radius: 1.875rem;
        @media (max-width: 1199.98px) {
            content: unset;
        }
    }
`;
export const LeaderBlock = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 4fr 5fr;
    grid-column-gap: 4rem;
    ${TitleBlock} {
        grid-column: 2/3;
        @media (max-width: 991.98px) {
            grid-column: unset;
        }
    }
    @media (max-width: 1199.98px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 991.98px) {
        grid-template-columns: 1fr;
    }
`;

export const ChairName = styled.h4`
    text-transform: uppercase;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
    font-weight: bold;
`;

export const MainRole = styled.div`
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    text-align: justify;
`;

export const MainRoleWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    padding: 1rem;
    align-items: center;
    max-width: 500px;
    i {
        font-size: 2.5rem;
    }
    p {
        margin: 0;
        font-weight: 500;
        font-size: 1.125rem;
        text-align: justify;
    }
`;

const loading = keyframes`
0%{
	background-position: -100px;
}

100%{
	background-position: 300px;
}
`;

export const Loader = styled.div`
    width: 100%;
    height: 100%;
    ${MainRole} {
        max-width: 30rem;
        width: 100% !important;
        height: 1rem !important;
        margin: 1rem 0;
    }
    ${SlideImage} {
        min-width: 30rem;
        margin-bottom: 1rem;
    }
    ${SlideCaption} {
        min-height: 3rem;
    }
    ${Slide}:before {
        content: unset !important;
    }
    ${TitleBlock}, ${ChairName}, ${MainRole},
	${SlideImage}, ${SlideCaption} {
        width: 10rem;
        height: 1.5rem;
        margin-top: 0;
        border: none;
        border-radius: 0.5rem;
        background-size: 600px;
        background-image: linear-gradient(
            90deg,
            #f4f4f4,
            rgba(229, 229, 229, 0.7) 90px,
            #f4f4f4 150px
        );
        animation-name: ${loading};
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;
