import React from 'react';
import classNames from 'classnames';

import cn from './DashboardPage.module.scss';

import { DashboardView } from '../../components/organisms/dashboardView/DashboardView';
import { CognitivLogo } from '../../components/atoms/cognitivLogo/CognitivLogo';
import { CopyrightText } from '../../components/atoms/copyrightText/CopyrightText';
import { Row } from '../../components/atoms/row/Row';
import { Column } from '../../components/atoms/column/Column';

const DashboardPage = () => (
  <Column justifyContent="space-between" margin="50px 25px" height="80vh">
    <Column>
      <CognitivLogo />
      <p className={classNames(cn['dashboard-title'])}>My Dashboard</p>
      <Row alignItems="flex-start">
        <DashboardView />
      </Row>
    </Column>
    <CopyrightText />
  </Column>
);

DashboardPage.defaultProps = {};

DashboardPage.propTypes = {};

export default DashboardPage;
