import styled from 'styled-components/macro';

export const Wrapper = styled.section`
    margin: 1.5rem;
    h2 {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        span {
            display: inline-block;
            text-align: center;
            font-size: 1rem;
            font-weight: bold;
            width: 2.5rem;
            height: 2.5rem;
            margin: 0 1rem;
            border-radius: 50%;
            line-height: 2.5rem;
            color: ${(props) => props.theme.colors.onSecondary};
            background-color: ${(props) => props.theme.colors.secondary};
        }
    }
    @media screen and (max-width: 567px) {
        margin: 0.5rem;
        & > h2 {
            font-size: 1.25rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            span {
                width: 1.5rem;
                height: 1.5rem;
                line-height: 1.5rem;
                font-size: 0.8rem;
            }
        }
    }
`;

export const ListWrapper = styled.div`
    display: grid;
    column-gap: 1rem;
    row-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 1rem;
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
