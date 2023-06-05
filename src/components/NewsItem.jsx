import React from 'react';

const NewsItem=(props)=>{

    let {title, description, imgurl, newsurl, author, date, source}=props;
    return (
      <div className="my-3 ">
                                                 
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
            <span class="badge" style={{backgroundColor: "#112435"}}>{source}</span>
          </div>
        
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

export default NewsItem;