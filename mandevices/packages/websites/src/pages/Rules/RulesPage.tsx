import React from 'react';
import { useRuleQuery } from 'generated/graphql';
import MarkDown from 'shared/MarkDown';
import { PageWrapper } from 'elements/Page';
import SEO from 'common/SEO';
import Wrapper from './RulesPage.styled';

const RulesPage = () => {
    const { data } = useRuleQuery();
    return (
        <PageWrapper>
            <SEO title="Nội quy" />
            <Wrapper>
                <MarkDown>{data?.rule?.content}</MarkDown>
            </Wrapper>
        </PageWrapper>
    );
};

export default RulesPage;
