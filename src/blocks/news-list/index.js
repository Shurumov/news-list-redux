import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button, Row, Col, Card} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {News} from 'blocks'
import {Loader} from 'components'

import {getData} from 'store/actions/news-list.actions';
import {setData as setSelectedNews} from 'store/actions/news.actions';
import {showModal} from 'store/actions/modal.actions';
import {API_METHODS} from 'constants/api-methods';

import styles from 'constants/styles'
import './news-list.scss';

class NewsList extends Component {
  static propTypes = {
    newsList: PropTypes.array,
    selectedAuthorId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {getData, selectedAuthorId} = this.props;

    if (prevProps.selectedAuthorId !== selectedAuthorId) {
      const getFromUser = Boolean(selectedAuthorId)
        ? `?userId=${selectedAuthorId}`
        : '';
      getData(`${API_METHODS.POSTS}${getFromUser}`)
    }
  }

  addNews = () => {
    this.setState(state => ({
      newsCount: state.newsCount + this.addNewsCount
    }));
  };

  render() {
    const {newsList, showModal, setSelectedNews, processing} = this.props;

    const {newsCount} = this.state;

    const {gutter} = styles;

    const newsListForRender = newsList.slice(0, newsCount);
    return (
      <div className="container">
        <Loader isShow={processing}>
          <Row gutter={gutter} content="top">
            {newsListForRender.map(item => (
              <Col sm={24} md={12} lg={8} xl={6} key={item.id}>
                <Card
                  title={item.title}
                  onClick={() => {
                    setSelectedNews({key: 'newsId', data: item.id});
                    showModal({
                      title: item.title,
                      Node: News
                    })
                  }}
                  className="cursor-pointer"
                  style={{
                    marginBottom: gutter,
                    maxHeight: 150,
                    overflow: "hidden",
                  }}
                >
                  <article>
                    {`${item.body.slice(0, 70)}...`}
                  </article>
                </Card>
              </Col>
            ))}

          </Row>
        </Loader>
        {newsCount < newsList.length && (
          <Button
            className="button-load-more"
            shape="round"
            type="primary"
            onClick={() => this.addNews()}
          >
            Load more...
          </Button>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({
                           newsState: {newsList, processing},
                           authorState: {selectedAuthorId},
                         }) => ({newsList, selectedAuthorId, processing});

const mapDispatchToProps = dispatch => ({
  getData: bindActionCreators(getData, dispatch),
  setSelectedNews: bindActionCreators(setSelectedNews, dispatch),
  showModal: bindActionCreators(showModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)