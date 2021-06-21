import styled from 'styled-components/macro';

const TitleIcon = styled.div`
    &:before {
        box-shadow: 0 0 5px rgb(0 0 0 / 20%);
        width: 1rem;
        height: 1rem;
        border-radius: 0.125rem;
        background-color: #fff;
        position: relative;
        display: block;
        content: '';
        top: 0.5rem;
        left: -100%;
    }

    &:after {
        display: block;
        width: 1rem;
        height: 1rem;
        position: relative;
        border-radius: 0.125rem;
        background-color: #13bebe;
        content: '';
        top: -50%;
        left: -50%;
    }
    @media screen and (max-width: 576px) {
        &:before,
        &:after {
            content: none;
        }
    }
`;

export default TitleIcon;
