import { TitleBlock } from 'components/Title/Title.styled';
import styled from 'styled-components/macro';

export const Dots = styled.ul`
    bottom: -2.5rem;
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

export const Wrapper = styled.div`
    display: grid;
    padding-bottom: 3rem;
    grid-template-columns: 100%;
    h3 {
        margin-bottom: 1rem;
        text-align: center;
    }
    ${TitleBlock} {
        margin-bottom: 2rem;
    }
    i {
        font-size: 0.7em;
    }
    .slick-slide {
        padding: 0 1rem;

        box-sizing: border-box;
    }
`;

export const ResearchTopicList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
`;

export const Navigation = styled.div`
    font-size: 2rem;

    color: #13bebe;
    display: flex;
    justify-content: space-between;

    align-items: center;
`;
