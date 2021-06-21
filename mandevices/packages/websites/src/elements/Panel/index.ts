import styled from 'styled-components/macro';

interface PanelProps {
    fit?: boolean;
    rounded?: boolean;
    full?: boolean;
}

const Panel = styled.div<PanelProps>`
    background-color: #fff;
    position: relative;
    padding: 1.5rem 2rem;
    ${(props) => props.full && `height: 100%;`}
    ${(props) => props.fit && `width: fit-content;`}
    ${(props) => props.rounded && `  border-radius: 1rem;`}
`;

export default Panel;
