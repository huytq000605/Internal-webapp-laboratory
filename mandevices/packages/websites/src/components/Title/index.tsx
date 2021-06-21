import TitleSectionBlock from 'blocks/Title';
import { TitleTextLarge, TitleTextMedium } from 'blocks/Title/TitleText';
import TitleIcon from 'elements/TitleIcon';
import React from 'react';
import { TitleWraper, SubTitle, TitleBlock } from './Title.styled';

export const Title: React.FC<{
    subTitle?: string | null;
    center?: boolean;
    underline?: boolean;
}> = ({ children, subTitle, center, underline }) => {
    return (
        <TitleBlock center={center}>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
            <TitleWraper>
                <TitleIcon />
                <TitleTextLarge underline={underline}>
                    {children}
                </TitleTextLarge>
            </TitleWraper>
        </TitleBlock>
    );
};

export const TitleSection: React.FC = ({ children }) => {
    return (
        <TitleSectionBlock>
            <TitleIcon />
            <TitleTextMedium>{children}</TitleTextMedium>
        </TitleSectionBlock>
    );
};
