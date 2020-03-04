import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal, hideModal} from 'store/actions/modal.action';

class Modals extends PureComponent {
  static propTypes = {
    modalState: PropTypes.object,
  };

  render() {
    const { modalState: {Node = <></>, isShow}, hideModal} = this.props;
    return (
      <Modal
        title="Basic Modal"
        visible={isShow}
        onCancel={hideModal}
      >
        {Node}
      </Modal>
    )
  }
}

const mapStateToProps = ({modalState}) => ({
  modalState,
});

const mapDispatchToProps = dispatch => ({
  showModal: bindActionCreators(showModal, dispatch),
  hideModal: bindActionCreators(hideModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
