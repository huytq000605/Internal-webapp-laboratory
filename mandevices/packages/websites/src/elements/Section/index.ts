import styled from 'styled-components/macro';

const SectionBlock = styled.section<{ full?: boolean }>`
    position: relative;
    padding-top: 3rem;
    ${(props) => props.full && `margin: 0 0 !important;`}
    margin: 0 15rem;
    @media (max-width: 1599.98px) {
        margin: 0 5rem;
    }
    @media (max-width: 767.98px) {
        margin: 0 3rem;
    }
    @media (max-width: 575.98px) {
        margin: 0 1rem;
        padding-top: 1rem;
    }
`;

export default SectionBlock;
