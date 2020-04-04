import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import cn from './Input.module.scss';

export const Input = React.memo(
  ({ handleChange, placeholder, name, padding, margin, color, type, width, backgroundColor }) => (
    <input
      name={name}
      onChange={handleChange}
      style={{ width, margin, color, backgroundColor, padding }}
      className={classNames(cn.input)}
      placeholder={placeholder}
      type={type}
    />
  ),
);

Input.defaultProps = {
  type: 'text',
  width: '100%',
  margin: '0',
  padding: '0',
  color: 'inherit',
  backgroundColor: '#e9f1fe',
};

Input.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
