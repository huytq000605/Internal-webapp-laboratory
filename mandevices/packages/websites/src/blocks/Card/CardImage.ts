import styled from 'styled-components/macro';

const CardImage = styled.img`
    width: 5rem;
    height: 5rem;
    @media screen and (max-width: 414px) {
        width: 4rem;
        height: 4rem;
        margin: auto;
    }
`;

export default CardImage;
