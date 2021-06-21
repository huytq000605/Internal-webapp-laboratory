import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    nav {
        align-self: stretch;
    }
`;

export const NewsCastDetailContainer = styled.div`
    display: grid;
    width: 100%;
    max-width: 1000px;
    background-color: ${(props) => props.theme.colors.surface};
    border-radius: 1rem;
    padding: 1.5rem 2rem;
`;

export const a = 8;
