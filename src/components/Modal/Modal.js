import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal, hideModal} from 'store/actions/modal.actions';

class Modals extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    modalState: PropTypes.object,
  };

  render() {
    const { modalState: {Node = (<></>), title, isShow}, hideModal} = this.props;
    return (
      <Modal
        title={title}
        visible={isShow}
        onCancel={hideModal}
        footer={null}
      >
        <Node/>
      </Modal>
    )
  }
}

const mapStateToProps = ({modalState,selectNewsState: { newsData: { title } }}) => ({
  modalState,
  title
});

const mapDispatchToProps = dispatch => ({
  showModal: bindActionCreators(showModal, dispatch),
  hideModal: bindActionCreators(hideModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
