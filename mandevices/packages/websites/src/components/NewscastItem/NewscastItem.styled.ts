import styled from 'styled-components/macro';

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 1rem;
    @media screen and (max-width: 567px) {
        padding-left: 0.5rem;
    }
`;

export const RecentNewsItem = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    margin-top: 25px;
    min-height: 100px;
    column-gap: 1.5rem;
    @media screen and (max-width: 567px) {
        column-gap: 0.5rem;
    }
    & > img {
        display: block;
        height: 120px;
        width: 150px;
        border-radius: 10px;
    }
    & > a {
        padding-left: 20px;
        padding-top: 2px;
        font-size: 18px;
        max-height: 100%;
        text-decoration: none;
        color: black;
        padding-right: 10px;

        & > h6 {
            height: 70%;
        }
        & > i {
            color: #7f7f7f;
            font-weight: 600;
            display: block;
            padding-top: 20px;
        }
    }
    & > a.active {
        background-color: #f2f9ff;
        color: #0080ff;
        border-right: 5px solid #0080ff;
        cursor: pointer;
        padding-left: -20px;
    }
`;
