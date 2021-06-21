import styled from 'styled-components/macro';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

const CardBlock = styled.div<{ center?: boolean }>`
    border-radius: 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    ${CardImage} {
        ${(props) => props.center && `margin: auto;`}
    }
    ${CardTitle} {
        ${(props) => props.center && `text-align: center;`}
    }
`;

export default CardBlock;
