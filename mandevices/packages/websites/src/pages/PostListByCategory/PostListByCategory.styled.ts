import Panel from 'elements/Panel';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: auto 1fr;
    ${Panel} {
        display: grid;
        align-items: flex-start;
        grid-template-columns: repeat(3, 1fr);
        @media screen and (max-width: 576px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Wrapper;
