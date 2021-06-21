import TitleBlock from 'blocks/Title';
import styled, { keyframes } from 'styled-components/macro';

export const Content = styled.div`
    display: grid;
    grid-template-columns: 5fr 4fr;
    grid-column-gap: 6.375rem;
    @media (max-width: 1199.98px) {
        grid-column-gap: 4rem;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 991.98px) {
        grid-template-columns: 1fr;
    }
`;

export const Info = styled.div``;

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
export const SubRole = styled.div`
    font-weight: 600;
    font-style: italic;
    text-align: justify;
    color: rgba(0, 0, 0, 0.5);
`;

export const ResearchTopicTitle = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    margin-top: 1.5rem;
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
    ${ResearchTopicTitle} {
        max-width: 30rem;
        width: 100% !important;
        height: 1rem !important;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
    ${MainRole}, ${SubRole} {
        max-width: 30rem;
        width: 100% !important;
        height: 1rem !important;
        margin: 1rem 0;
    }

    ${TitleBlock}, ${ChairName}, ${MainRole}, ${SubRole}, ${ResearchTopicTitle} {
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
