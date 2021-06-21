// eslint-disable-next-line import/no-extraneous-dependencies
import { Button } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const HomeSlideWrapper = styled.section`
    height: ${(props) =>
        `calc(100vh - ${props.theme.dimensions.appBarHeight})`};
    @media screen and (max-width: 992px) {
        height: calc(60vh - 84px);
    }
    @media screen and (max-width: 576px) {
        height: calc(40vh - 84px);
    }
`;

export const SeeMoreButton = styled(Button)`
    margin: 1rem 0;
    a {
        color: white;
    }
`;

export const ResearchTopicsWrapper = styled.div`
    padding-bottom: 3rem;
    @media screen and (max-width: 576px) {
        padding: 0 1rem;
    }
    @media screen and (max-width: 992px) {
        padding: 0 2rem;
    }
`;
