import styled from 'styled-components/macro';
import Img from 'react-cool-img';

export const SlideCaptionList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
`;

export const SlideCaptionWrapper = styled.div<{ shadow?: boolean }>`
    z-index: 2;
    width: 100%;
    overflow: hidden;
    background-color: white;
    border-bottom-right-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
    position: relative;
    ${(props) => props.shadow && `box-shadow: 0 3px 6px rgb(0 0 0 / 16%);`}
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

    @media screen and (max-width: 576px) {
        font-size: 1rem;
    }
`;
export const SlideIndicator = styled.div`
    display: flex;
    column-gap: 0.5rem;
    z-index: 2;
`;

export const SlideImageWrapper = styled.div`
    z-index: 2;
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

export const SlideBlock = styled.div`
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
