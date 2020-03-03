import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Modal as ModalAnt} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal, hideModal} from 'store/actions/modal.action';
import 'antd/es/modal/style/css';


class Modals extends PureComponent {
  static propTypes = {
    modalState: PropTypes.object,
  };

  render() {
    const {modalState: {Node = <></>, isShow}} = this.props;
    return (
      <ModalAnt
        title="Basic Modal"
        isOpen={isShow}
      >
        {Node}
      </ModalAnt>
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
