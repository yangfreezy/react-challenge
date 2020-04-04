import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import cn from './TextLink.module.scss';

export const TextLink = React.memo(({ children, path }) => (
  <Link to={path} className={classNames(cn['text-link'])}>
    {children}
  </Link>
));

TextLink.defaultProps = {};

TextLink.propTypes = {
  children: PropTypes.any,
  path: PropTypes.string,
};
