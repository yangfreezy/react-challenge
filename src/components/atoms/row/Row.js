import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import cn from './Row.module.scss';

export const Row = ({ children, alignItems, justifyContent }) => (
  <div className={classNames(cn.row)} style={{ alignItems, justifyContent }}>
    {children}
  </div>
);

Row.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
};
Row.propTypes = {
  children: PropTypes.any,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
};
