import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state={
        articles: [],
        page: 1,
        loading: false
    }
  }

  handlePrev=async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70027ce3ae8b44f1bf160dafbc1efd3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedata=await data.json();
    this.setState({
      page: this.state.page-1,
      articles:parsedata.articles,
      loading: false
    })
  }

  handleNext=async ()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
    {
      document.getElementById("btn-nxt").disabled=true;
    }

    else
    {
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70027ce3ae8b44f1bf160dafbc1efd3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data=await fetch(url);
      let parsedata=await data.json();
      this.setState({
        page: this.state.page+1,
        articles:parsedata.articles,
        loading: false
    })
    }
  }

  async componentDidMount()
  {
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70027ce3ae8b44f1bf160dafbc1efd3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedata=await data.json();
    this.setState({articles:parsedata.articles,totalResults: parsedata.totalResults, loading:false});
  }

  render() {
    return (
      <div className='container my-4'>
        {this.state.loading && <Spinner/>}
        <h2 className='text-center' style={{color:"white", margin:"30px 0"}}>{(this.props.category).charAt(0).toUpperCase()+this.props.category.slice(1)} - Top headlines today</h2>
        <div className="row" >
          {!this.state.loading && this.state.articles.map((ele)=>{
            return(
              <div className="col-md-4"  key={ele.url}>
                <NewsItem 
                  title={ele.title?ele.title:""} 
                  description={ele.description?ele.description:""} 
                  imgurl={ele.urlToImage} newsurl={ele.url} 
                  author={ele.author} 
                  date={ele.publishedAt} 
                  source={ele.source.name}
                />
              </div>
            )
          })}
        </div>
        <div class="d-flex justify-content-between">
        <button className="btn" onClick={this.handlePrev} disabled={this.state.page<=1} style={{backgroundColor: "#e3f2fd"}} href="#" role="button">&larr; Prev</button>
        <button className="btn" id="btn-nxt" onClick={this.handleNext} style={{backgroundColor: "#e3f2fd"}} href="#" role="button">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
