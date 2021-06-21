import styled, { css } from 'styled-components/macro';

export const narrowText = css`
    letter-spacing: -0.04rem;
`;
export const tinyLargeText = css`
    font-size: 1.125rem;
`;
export const smallText = css`
    font-size: 0.9rem;
`;

export const normalText = css`
    font-size: 1rem;
`;

export const mediumText = css`
    font-weight: 500;
`;

export const semiBold = css`
    font-weight: 600;
`;

export const SmallMediumText = css`
    ${smallText}
    ${semiBold}
`;

export const NormalSemiBoldText = styled.div`
    ${normalText}
    ${semiBold}
`;

export const NarrowTinyLargeMediumText = styled.div`
    ${narrowText}
    ${tinyLargeText}
	${mediumText}
`;

export const NarrowTinyLargeBoldText = styled.div`
    ${narrowText}
    ${tinyLargeText}
	font-weight: bold;
`;

export const NormalText = styled.div``;
