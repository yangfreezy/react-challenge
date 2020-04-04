import React from 'react';

import { DashboardContent } from '../../molecules/dashboardContent/DashboardContent';
import { DashboardNavigation } from '../../molecules/dashboardNavigation/DashboardNavigation';
import { Column } from '../../atoms/column/Column';

export const DashboardView = () => (
  <Column>
    <DashboardNavigation />
    <DashboardContent />
  </Column>
);

DashboardView.defaultProps = {};

DashboardView.propTypes = {};
