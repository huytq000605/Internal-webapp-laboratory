import styled from 'styled-components/macro';

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.colors.surface};
    padding: 2rem;
    margin: 2rem;
    max-width: ${(props) => props.theme.dimensions.maxWidthContent};
    margin: auto;
    h1 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
    h2 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
    h3 {
        font-size: 1rem;
    }
    @media screen and (max-width: 576px) {
        padding: 0.5rem;
        ul {
            padding: 0.5rem;
        }
        div > ul {
            margin-left: 1rem;
        }
    }
`;

export default Wrapper;
