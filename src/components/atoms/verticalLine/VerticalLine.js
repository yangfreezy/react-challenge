import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import cn from './VerticalLine.module.scss';

export const VerticalLine = React.memo(({ height }) => (
  <div style={{ height }} className={classNames(cn['vertical-line'])} />
));

VerticalLine.defaultProps = {
  height: '300px',
};

VerticalLine.propTypes = {
  height: PropTypes.string,
};
