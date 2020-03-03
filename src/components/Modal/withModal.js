import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal, hideModal } from 'store/actions/modal.action';

export function withModals(Component) {
  class withModalHOC extends PureComponent {
    render() {
      return (
        <Component showModal={this.props.showModal} hideModal={this.props.hideModal} {...this.props}/>
      );
    }
  }

  return connect(null, dispatch => ({
    showModal: bindActionCreators(showModal, dispatch),
    hideModal: bindActionCreators(hideModal, dispatch),
  }))(withModalHOC);
}