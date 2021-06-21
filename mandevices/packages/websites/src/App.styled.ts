import styled from 'styled-components/macro';
import { Button } from 'react-bootstrap';

export const ScrollToTopButton = styled(Button)`
    position: fixed;
    width: 3rem;
    height: 3rem;
    bottom: 5%;
    right: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 2rem;
    z-index: 10000;
    @media screen and (max-width: 576px) {
        margin-top: 3rem;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
        right: 1rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
`;

export const Body = styled.main`
    margin-top: ${(props) => props.theme.dimensions.appBarHeight};
    flex-grow: 1;
    @media screen and (max-width: 576px) {
        margin-top: 3rem;
    }
`;
