import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setModal as setModalAction } from 'ducks/actions';
import { Loading } from 'components/loading/Loading';
import cn from './Layouts.module.scss';

export class ConnectedPublicLayout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.object,
    settings: PropTypes.object,
  };

  render() {
    const { children } = this.props;
    const { loading } = this.props.settings;
    return (
      <div className={cn.publicContainer}>
        <div className={cn.content}>{children}</div>
        {loading && <Loading variant="dark" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  setModal: setModalAction,
};

export const PublicLayout = connect(mapStateToProps, mapDispatchToProps)(ConnectedPublicLayout);
