import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import cn from './Column.module.scss';

export const Column = ({ children, alignItems, justifyContent, height, width, margin }) => (
  <div className={classNames(cn.column)} style={{ alignItems, justifyContent, height, width, margin }}>
    {children}
  </div>
);

Column.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  height: 'auto',
  width: 'auto',
};

Column.propTypes = {
  children: PropTypes.any,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
};
