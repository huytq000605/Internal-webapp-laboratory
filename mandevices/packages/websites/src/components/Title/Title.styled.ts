import TitleIcon from 'elements/TitleIcon';
import styled from 'styled-components/macro';

export const TitleWraper = styled.div`
    display: flex;
    column-gap: 0.5rem;
    position: relative;
    ${TitleIcon} {
        position: absolute;
        left: -1rem;
        top: -50%;
    }
`;
export const SubTitle = styled.div`
    font-weight: bold;
    font-size: 1.125rem;
    opacity: 0.5;
    @media screen and (max-width: 575.98px) {
        font-size: 0.8rem;
    }
`;

export const TitleBlock = styled.div<{ center?: boolean }>`
    align-items: center;
    width: 100%;
    display: grid;
    margin-bottom: 4.5rem;
    flex-direction: column;
    justify-items: ${(props) => (props.center ? 'center' : 'self-start')};
    justify-content: ${(props) => (props.center ? 'center' : 'self-start')};
    @media screen and (max-width: 575.98px) {
        margin-bottom: 1rem;
    }
`;
