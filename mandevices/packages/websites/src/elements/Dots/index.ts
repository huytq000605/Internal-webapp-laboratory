import styled from 'styled-components/macro';

const Dot = styled.div<{ active?: boolean }>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? '#13bebe' : '#fff')};
    border: 2px solid #13bebe;
    &:hover {
        cursor: pointer;
    }
`;

export default Dot;
