import styled from 'styled-components/macro';

export const Text = styled.p`
    margin: 0;
    font-weight: 500;
    letter-spacing: -0.04em;
`;

export const FooterBlock = styled.footer`
    background-color: white;
    padding: 24px;
    display: grid;
    column-gap: 1.5rem;
    justify-items: center;
    grid-template-columns: 0.7fr 1fr 1fr;
    @media screen and (max-width: 767.98px) {
        grid-template-columns: 1fr;
        row-gap: 1.5rem;
    }
    @media screen and (max-width: 575.98px) {
        row-gap: 1rem;
    }
`;

export const Logo = styled.img`
    max-width: 220px;
`;

export const Contact = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
`;

export const ContactItem = styled.div`
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    grid-template-rows: 1fr auto;
    column-gap: 0.5rem;
    align-items: center;
    & > i {
        justify-self: center;
        grid-row: 1/3;
    }
    & > ${Text} {
        &:nth-child(3) {
            font-style: italic;
            color: rgba(0, 0, 0, 0.5);
        }
    }
`;

export const Info = styled.section`
    @media screen and (max-width: 767.98px) {
        justify-self: self-start;
    }
`;
