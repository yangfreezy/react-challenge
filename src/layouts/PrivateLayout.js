import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from 'components/atoms/loading/Loading';

class PrivateLayoutWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    loading: PropTypes.bool,
  };

  render() {
    const { loading, children } = this.props;
    return (
      <div>
        {children}
        {loading && <Loading variant="dark" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.settings.loading,
});

export const PrivateLayout = withRouter(connect(mapStateToProps, null)(PrivateLayoutWrapper));
