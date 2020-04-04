import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import cn from './ActionText.module.scss';

export const ActionText = React.memo(({ children, color, fontSize, margin, width, onClick }) => (
  <div
    className={classNames(cn['action-text'])}
    style={{ width, margin, color, fontSize }}
    onClick={onClick}
    type="submit"
  >
    {children}
  </div>
));

ActionText.defaultProps = {
  width: 'auto',
  margin: '0px',
  color: 'pink',
  fontSize: '14px',
  onClick: () => {},
};

ActionText.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
};
