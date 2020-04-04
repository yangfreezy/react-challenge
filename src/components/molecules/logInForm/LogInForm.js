import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import classNames from 'classnames';

import { setUserLoggedIn as setUserLoggedInAction, setLoading as setLoadingAction } from '../../../ducks/actions';
import { routes } from '../../../routes/routes';

import { Input } from '../../atoms/input/Input';
import { Button } from '../../atoms/buttons/Button';
import cn from './LogInForm.module.scss';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toDashboard, setToDashboard] = useState(false);

  const logIn = async e => {
    e.preventDefault();
    dispatch(setLoadingAction(true));

    setTimeout(() => {
      dispatch(setUserLoggedInAction({ email, password }));
      setToDashboard(true);
      dispatch(setLoadingAction(false));
    }, 3000);
  };

  const handleInputChange = e => {
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  return toDashboard ? (
    <Redirect to={routes.DASHBOARD} />
  ) : (
    <div className={classNames(cn['login-form-container'])}>
      <p className={classNames(cn.header)}> Cognitiv Login </p>
      <div className={classNames(cn['login-content'])}>
        <form onSubmit={logIn} className={classNames(cn['login-form'])}>
          <Input
            margin="0px 0px 10px 0px"
            padding="10px"
            handleChange={handleInputChange}
            width="350px"
            placeholder="Email"
            name="email"
          />
          <Input
            margin="0px 0px 10px 0px"
            padding="10px"
            handleChange={handleInputChange}
            width="350px"
            placeholder="Password"
            name="password"
            type="password"
          />
          <Button width="350px" margin="0px 0px" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

connect(null)(LogInForm);
