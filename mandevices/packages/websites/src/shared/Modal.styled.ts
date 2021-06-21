import styled from 'styled-components/macro';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    img {
        object-fit: contain;
        max-width: 60%;
        max-height: 80%;
        margin: 10% auto;
        border: 3px solid white;
    }
`;

export default Wrapper;
