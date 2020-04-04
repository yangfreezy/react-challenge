import React from 'react';
import classNames from 'classnames';

import { TextLink } from '../../atoms/textLink/TextLink';
import cn from './LogInAssist.module.scss';

export const LogInAssist = React.memo(() => (
  <div className={classNames(cn['login-assist-container'])}>
    <p className={classNames(cn.header)}> Cognitiv Terms </p>
    <div className={classNames(cn['login-content'])}>
      <p>
        By proceeding to login to your account and use Cognitiv, you are agreeing to our Terms of Service and Privacy
        Policy.
      </p>
      <TextLink path="/forgot-password">Forgot Password?</TextLink>
    </div>
  </div>
));
