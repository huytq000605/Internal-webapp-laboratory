/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import PageTitle from '../../components/PageTitle';

import { Block, Container } from './components';

const HomePage = ({ history: { push } }) => {
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <Block>
          <h2>Trang quản trị nội dung Website Mandevices</h2>
        </Block>
      </Container>
    </>
  );
};

export default memo(HomePage);
