import styled from 'styled-components/macro';
import Dot from 'elements/Dots';

export const Dots = styled.ul`
    text-align: left;
    li {
        &.slick-active {
            button {
                background-color: #13bebe;
            }
        }
        button {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            border: 2px solid #13bebe;
            &:before {
                content: none;
            }
        }
        &:hover {
            cursor: pointer;
        }
    }
`;

const TitleWrapper = styled.div`
    width: 100%;
    height: 108px;
    display: flex !important;
    align-items: center;
    padding-left: 118px;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    &,
    a {
        color: ${(props) => props.theme.colors.background};
        text-decoration: none;
    }
    a:hover {
        color: ${(props) => props.theme.colors.secondary};
    }

    @media screen and (max-width: 575.98px) {
        padding: 0 1rem;
        font-size: 1rem;
        height: 3em;
        font-weight: 600;
    }
`;

const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Slide = styled.section`
    height: 100%;
    position: relative;
    .slick-dots {
        position: absolute;
        bottom: 110px;
        padding-left: 116px;
        left: 0;
        right: 0;
        @media screen and (max-width: 575.98px) {
            bottom: 3.5em;
            padding-left: 0.6rem;
            left: 0;
        }
    }
    .slick-slider {
        backdrop-filter: blur(30px) brightness(1.3);
        background-color: rgb(255, 255, 255, 0.15);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    ${Dot} {
        position: absolute;
        bottom: 116px;
        left: 118px;
        @media screen and (max-width: 575.98px) {
            bottom: 3.5em;
            left: 1rem;
        }
    }
`;

export default Slide;

export { SlideImage, TitleWrapper };
