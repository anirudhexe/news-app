import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
  const [articles, setarticle] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);
  const [totalResults, settotalResults] = useState(0);

  
  document.title="NewsApp - "+props.category;

  const fetchMoreData=async()=>{
    setpage(page+1);
    updateNews();
  }

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticle(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
    setloading(false);
  };

  useEffect(() => {
    updateNews();
  }, [])
  

    return (
      <div className="container my-4">
        <h2
          className="text-center"
          style={{ color: "white", margin: "30px 0" }}
        >
          {props.category.charAt(0).toUpperCase() +
            props.category.slice(1)}{" "}
          - Top headlines today
        </h2>
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={true}
          loader={loading && <Spinner/>}
          style={{overflow:"hidden"}}
        >
          <div className="row">
          {articles.map((ele,index) => {
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

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
