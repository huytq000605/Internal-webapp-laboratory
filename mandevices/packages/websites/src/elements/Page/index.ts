import styled from 'styled-components/macro';

interface PageProps {
    rounded?: boolean;
}

const Page = styled.div<PageProps>`
    width: 100%;
    height: 100%;
    position: relative;
    ${(props) => props.rounded && `  border-radius: 1rem;`}
`;

export const PageWrapper = styled.div`
    height: 100%;
    margin: auto;
    padding: 2rem 4rem;
    max-width: 1600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
    & > * {
        width: 100%;
    }
    @media screen and (max-width: 1200px) {
        padding: 2rem;
    }
    @media screen and (max-width: 576px) {
        padding: 1rem;
    }
    @media screen and (max-width: 480px) {
        padding: 0.5rem;
    }
`;

export default Page;
