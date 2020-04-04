import React from 'react';
import classNames from 'classnames';

import cn from './RootPage.module.scss';

import { LogInView } from '../../components/organisms/logInView/LogInView';
import { CognitivLogo } from '../../components/atoms/cognitivLogo/CognitivLogo';
import { CopyrightText } from '../../components/atoms/copyrightText/CopyrightText';
import { Row } from '../../components/atoms/row/Row';
import { Column } from '../../components/atoms/column/Column';

const RootPage = React.memo(() => (
  <Column justifyContent="space-between" margin="50px 25px" height="60vh">
    <div className={classNames(cn['login-container'])}>
      <Column>
        <CognitivLogo />
        <Row alignItems="flex-start">
          <LogInView />
        </Row>
      </Column>
    </div>
    <CopyrightText />
  </Column>
));

RootPage.defaultProps = {};

RootPage.propTypes = {};

export default RootPage;
