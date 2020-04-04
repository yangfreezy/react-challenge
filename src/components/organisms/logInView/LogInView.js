import React from 'react';

import { LogInForm } from '../../molecules/logInForm/LogInForm';
import { LogInAssist } from '../../molecules/logInAssist/LogInAssist';
import { VerticalLine } from '../../atoms/verticalLine/VerticalLine';

export const LogInView = React.memo(() => (
  <>
    <LogInForm />
    <VerticalLine height="200px" />
    <LogInAssist />
  </>
));

LogInView.defaultProps = {};

LogInView.propTypes = {};
