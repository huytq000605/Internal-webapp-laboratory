import React from 'react';
import { Route } from 'react-router-dom';
import { PageWrapper } from 'elements/Page';
import SEO from 'common/SEO';
import MenuDevices from './MenuDevices';
import ContentDevices from './ContentDevices';
import { Wrapper } from './Devices.styled';

const Devices = () => {
    return (
        <PageWrapper>
            <SEO title="Thiết bị" />
            <Wrapper>
                <MenuDevices />
                <Route path="/thiet-bi/:category">
                    <ContentDevices />
                </Route>
            </Wrapper>
        </PageWrapper>
    );
};

export default Devices;
