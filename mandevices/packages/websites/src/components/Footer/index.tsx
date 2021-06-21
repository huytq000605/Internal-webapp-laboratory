import React from 'react';
import { useFooterQuery } from 'generated/graphql';
import Footer from './Footer';

const FooterContainer: React.FC = () => {
    const { data } = useFooterQuery();
    if (!data) return null;
    const props = { ...data.footer, logo: data.footer?.logo?.url };
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Footer {...props} />;
};

export default FooterContainer;
