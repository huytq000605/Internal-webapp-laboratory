import styled from 'styled-components';
import { Row } from 'react-bootstrap';

interface SomeInterface {
    gutter: number;
    margintop: number;
}

const RowElement = styled(Row)<SomeInterface>`
    column-gap: ${(props) => `${props.gutter}rem`};
    margin-top: ${(props) => `${props.margintop}rem`};
    margin-right: unset;
    margin-left: unset;
    justify-content: center;
`;

export default RowElement;
