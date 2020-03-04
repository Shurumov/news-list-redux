import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Modal, Button, Row, Col, Card} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getData} from 'store/actions/news.action';
import {showModal} from 'store/actions/modal.action';
import {API_METHODS} from 'constants/api-methods';
import styles from 'constants/styles'

class NewsList extends Component {
  static propTypes = {
    newsList: PropTypes.array,
    getData: PropTypes.func,
  };

  state = {
    newsCount: 10,
  };

  addNewsCount = 10;

  async componentDidMount() {
    const {getData} = this.props;
    await getData(API_METHODS.POSTS)
  }


  addNews = () => {
    this.setState(state => ({
      newsCount: state.newsCount + this.addNewsCount
    }));
  };

  render() {
    const {newsList, showModal} = this.props;

    const {newsCount} = this.state;

    const {gutter} = styles;

    const newsListForRender = newsList.slice(0, newsCount);
    return (
      <div className="container">
        <Row gutter={gutter} content="top">
          {newsListForRender.map(item => (
            <Col sm={24} md={12} lg={8} xl={6} key={item.id}>
              <Card title={item.title} style={{marginBottom: gutter}}>
                <article>
                  {item.body}
                </article>
              </Card>
            </Col>
          ))}

        </Row>
        {newsCount < newsList.length && (
          <Button
            type="primary"
            // onClick={() => showModal(<div>1</div>)}
            onClick={() => this.addNews()}
          >
            показать ещё
          </Button>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({newsState: {newsList}}) => ({newsList});

const mapDispatchToProps = dispatch => ({
  getData: bindActionCreators(getData, dispatch),
  showModal: bindActionCreators(showModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)