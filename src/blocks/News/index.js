import React, {Fragment, PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Comment} from 'antd';

import {Loader} from "components";

import {getData, clearState} from 'store/actions/news.actions'
import {API_METHODS} from 'constants/api-methods';

import './news.scss'

export class News extends PureComponent {
  static propTypes = {
    processing: PropTypes.bool,
    newsData: PropTypes.object,
    newsId: PropTypes.number,
    getData: PropTypes.func,
    getComments: PropTypes.func,
    clearState: PropTypes.func,
  };


  async componentDidMount() {
    const {getData, newsId} = this.props;
    await getData(API_METHODS.POST(newsId), 'newsData');
    await getData(API_METHODS.COMMENTS(newsId), 'commentsData');
  }

  componentWillUnmount() {
    const { clearState } = this.props;
    clearState();
  }

  render() {
    const {newsData, commentsData, processing} = this.props;
    return (
      <Loader isShow={processing}>
        {newsData.body}
        <h3 className="comments-title">Comments</h3>
        <div>
          {commentsData.map(item => (
            <Fragment key={item.id}>
              <Comment
                author={<p>{item.name}<br/><a href={`mailto:${item.email}`}>{item.email}</a></p>}
                content={item.body}
              />
              <hr/>
            </Fragment>
          ))}
        </div>
      </Loader>
    )
  }
}

const mapStateToProps = ({
                           selectNewsState: {newsData, newsId, commentsData, processing},
                         }) => ({newsData, newsId, commentsData, processing});
const mapDispatchToProps = dispatch => ({
  getData: bindActionCreators(getData, dispatch),
  clearState: bindActionCreators(clearState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(News)