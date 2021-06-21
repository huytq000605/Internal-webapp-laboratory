import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-template-columns: 23% 77%;
    grid-column-gap: 5px;
    display: grid;
    h4 {
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        grid-row-gap: 5px;
    }
    @media screen and (max-width: 768px) {
        height: auto;
    }
    @media screen and (max-width: 576px) {
        h4 {
            margin-bottom: 0.5rem;
        }
    }
`;
export const LeftMenu = styled.div`
    background-color: white;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    & > h2 {
        padding-top: 13px;
        text-align: center;
        font-weight: bold;
    }
    @media screen and (max-width: 576px) {
        padding: 0.5rem;
    }
`;
export const MenuItem = styled.div`
    max-height: 200px;
    width: 100%;
    & > h4 {
        color: #7f7f7f;
        text-align: center;
    }
    & > h5 {
        font-size: 18px;
        color: #7f7f7f;
        margin-bottom: 40px;
        margin-top: 30px;
        padding-left: 20px;
    }
    & > li {
        width: 100%;
        list-style-type: circle;

        & > a {
            padding-left: 20px;
            display: block;
            margin-top: -34px;
            color: black;
            width: 101%;
            font-size: 18px;
            line-height: 48px;
            text-decoration: none;
            padding-left: 18px;
            align-items: center;
        }
        & > a.active,
        & > a:hover {
            background-color: #f2f9ff;
            color: #0080ff;
            padding-left: 20px;
            border-right: 5px solid #0080ff;
            cursor: pointer;
            @media screen and (max-width: 992px) {
                border: none;
                width: 100%;
            }
        }
    }
`;
