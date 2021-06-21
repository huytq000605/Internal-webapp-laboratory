import styled from 'styled-components/macro';

export const TitleTextLarge = styled.h2<{ underline?: boolean }>`
    position: relative;
    letter-spacing: -0.04em;
    margin: 0;
    font-weight: bold;
    text-align: center;
    ${(props) =>
        props.underline &&
        ` &:after {
        position: absolute;
        bottom: -1.25rem;
        left: 50%;
		border: 2px solid #707070;
		background-color: #707070;
        width: 50%;
        border-radius: 1rem;
        content: '';
        transform: translateX(-50%);
    }`}
    @media screen and (max-width: 575.98px) {
        font-size: 1.125rem;
        &:after {
            content: none;
        }
    }
`;
export const TitleTextMedium = styled.h3`
    font-weight: bold;
    margin: 0;
    position: relative;
    font-size: 1.125rem;
    letter-spacing: -0.04em;
    color: rgba(0, 0, 0, 0.5);
`;
