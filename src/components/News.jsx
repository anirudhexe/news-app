import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0
    };
    document.title="NewsApp - "+this.props.category;
  }

  fetchMoreData=async()=>{
    this.setState({page:this.state.page+1});
    this.updateNews();
  }

  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70027ce3ae8b44f1bf160dafbc1efd3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-4">
        <h2
          className="text-center"
          style={{ color: "white", margin: "30px 0" }}
        >
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          - Top headlines today
        </h2>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={this.state.loading && <Spinner/>}
          style={{overflow:"hidden"}}
        >
          <div className="row">
          {this.state.articles.map((ele,index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={ele.title ? ele.title : ""}
                    description={ele.description ? ele.description : ""}
                    imgurl={ele.urlToImage}
                    newsurl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
            </div>
          </InfiniteScroll>
      </div>
    );
  }
}

export default News;
