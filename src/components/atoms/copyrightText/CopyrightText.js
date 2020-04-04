import React from 'react';
import classNames from 'classnames';

import cn from './CopyrightText.module.scss';

export const CopyrightText = () => <p className={classNames(cn['copyright-text'])}> © 2020 Cognitiv</p>;
