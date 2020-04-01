import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModal as setModalAction, setLoading as setLoadingAction } from 'ducks/actions';
import cn from './RootPage.module.scss';

export class RootPage extends Component {
  static propTypes = {
    setModal: PropTypes.func,
    setLoading: PropTypes.func,
  };

  state = {
    email_address: '',
    password: '',
  };

  render() {
    return (
      <div className={cn.page}>
        <h1>ROOT PAGE HERE</h1>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setModal: setModalAction,
  setLoading: setLoadingAction,
};

export default connect(null, mapDispatchToProps)(RootPage);
