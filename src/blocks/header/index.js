import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Select} from "antd";

import {getData, setSelectedAuthor} from 'store/actions/authors.actions';
import {API_METHODS} from 'constants/api-methods';

import './header.scss';

class Header extends Component {
  static propTypes = {
    author: PropTypes.string,
    getData: PropTypes.func,
    setSelectedAuthor: PropTypes.func,
  };

  async componentDidMount() {
    const {getData} = this.props;
    getData(API_METHODS.USERS)
  }

  render() {
    const {Option} = Select;

    const {authors, setSelectedAuthor} = this.props;

    return (
      <header className="header container">
        <Select
          style={{width: 200}}
          placeholder="Select a author"
          allowClear
          onChange={id => setSelectedAuthor(id)}
        >
          {authors.map(item => (
            <Option
              value={item.id}
              key={item.id}
            >
              {item.name}
            </Option>
          ))}
        </Select>
      </header>
    )
  }
}

const mapStateToProps = ({authorState}) => ({
  authors: authorState.authors,
});

const mapDispatchToProps = dispatch => ({
  getData: bindActionCreators(getData, dispatch),
  setSelectedAuthor: bindActionCreators(setSelectedAuthor, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);