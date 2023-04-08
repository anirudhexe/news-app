import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    let {title, description, imgurl, newsurl, author, date, source}=this.props;
    return (
      <div className="my-3 ">
        <span class="badge" style={{backgroundColor: "#112435", opacity: "0.7", zIndex:1}}>{source}</span>                                         
        <div className="card">
        <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-body-secondary">by {author==null?"unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm" style={{backgroundColor: "#90A2DC", fontSize:"15px"}}>Read more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem