import styled from 'styled-components/macro';

const Item = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid #f2f2f2;
    padding: 1rem;
    margin-top: 1rem;

    @media screen and (max-width: 992px) {
        height: auto;
        width: auto;
    }
    & > div {
        display: grid;
        grid-template-columns: 1fr 5.5fr 1.5fr 1fr 1.5fr;
        align-items: center;
        & * {
            height: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
        }
        @media screen and (max-width: 992px) {
            display: block;
        }
        & > p {
            font-size: 16px;
            line-height: 40px;
            font-weight: 600;
            text-align: center;
            border-left: 3px solid #f2f2f2;
            margin: 0;
            @media screen and (max-width: 992px) {
                border: none;
                text-align: start;
            }
        }
        & > img {
            display: block;
            height: 40px;
            width: auto;
            margin: 0 auto;
            @media screen and (max-width: 992px) {
                border: none;
                padding-left: 1%;
                text-align: start;
            }
            @media screen and (max-width: 992px) {
                display: none;
            }
        }
        & > p:last-child {
            cursor: pointer;
        }
        & > a {
            text-decoration: none;
            color: black;
            font-size: 16px;
            line-height: 40px;
            &:hover {
                color: blue;
            }
        }
    }
`;
export default Item;
