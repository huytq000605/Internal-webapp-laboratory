import styled from 'styled-components/macro';

const TitleBlock = styled.div`
    display: flex;
    column-gap: 8px;
    text-transform: uppercase;
    letter-spacing: -0.04em;
    margin-bottom: 2.25rem;
    @media screen and (max-width: 575.98px) {
        margin-bottom: 1rem;
    }
`;

export default TitleBlock;
