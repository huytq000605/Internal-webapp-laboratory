import styled from 'styled-components/macro';

const Wrapper = styled.div`
    background: white;
    max-height: 100%;
    border-radius: 20px;
    display: block;
    padding: 2rem;
    display: grid;
    row-gap: 2rem;
`;

export const Item = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-row-gap: 2rem;
    height: fit-content;
    border: 1px solid ${(props) => props.theme.colors.surfaceVariant};
    padding: 1rem;
    border-radius: 1rem;
    & > img {
        display: block;
        width: 100%;
        border-radius: 20px;
    }
    & > p {
        display: block;
        height: 100%;
        font-size: 18px;
        padding-left: 20px;
        font-weight: 600;
    }
`;

export default Wrapper;
