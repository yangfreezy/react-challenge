import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { setUserLoggedIn as setUserLoggedInAction, setLoading as setLoadingAction } from '../../../ducks/actions';
import { routes } from '../../../routes/routes';

import { TextLink } from '../../atoms/textLink/TextLink';
import { ActionText } from '../../atoms/actionText/ActionText';
import { VerticalLine } from '../../atoms/verticalLine/VerticalLine';
import { Column } from '../../atoms/column/Column';
import { Row } from '../../atoms/row/Row';
import cn from './DashboardNavigation.module.scss';

export const DashboardNavigation = () => {
  const [toHome, setToHome] = useState(false);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setLoadingAction(true));
    dispatch(setUserLoggedInAction(false));
    setToHome(true);
    dispatch(setLoadingAction(false));
  };

  return toHome ? (
    <Redirect to={routes.ROOT} />
  ) : (
    <Column>
      <Row>
        <div className={classNames(cn['dashboard-links'])}>
          <TextLink path="/marketing-analytics"> Marketing Analytics</TextLink>
          <VerticalLine height="50px" />
          <TextLink path="/ai"> Artificial Intelligence </TextLink>
          <VerticalLine height="50px" />
          <TextLink path="/search"> Cognitiv Search </TextLink>
          <VerticalLine height="50px" />
          <ActionText onClick={logOut}> Log Out </ActionText>
        </div>
      </Row>
    </Column>
  );
};
