import styled from 'styled-components/macro';

const Content = styled.div`
    & img,
    pre {
        max-width: calc(100vw - 1rem);
    }
    img {
        display: inline-block;
        margin: auto;
        margin-bottom: 1rem;
        max-width: 100%;
    }
    thead {
        background-color: ${(props) => props.theme.colors.surfaceVariant};
    }
    th,
    td {
        padding: 0 0.5rem;
    }
    table {
        width: 100%;
    }

    table,
    th,
    td {
        border: 1px solid ${(props) => props.theme.colors.surfaceVariant};
        border-collapse: collapse;
    }
`;
export default Content;
