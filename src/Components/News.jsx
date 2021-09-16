import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import '../resources/stylesheets/Spinner.css';
import PropTypes from 'prop-types';
import SwipeNews from './SwipeNews';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [totalPage, setTotalPage] = useState(0)

    const funcToCapitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // document.title = funcToCapitalizeString(props.category + " - NewsDaily");


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let ParsedData = await data.json()
        props.setProgress(60);
        setArticles(ParsedData.articles)
        setTotalResults(ParsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])


    /* const handlePrevClick = async () => {
         setPage(page-1);
         updateNews()
     }
 
     const handleNextClick = async () => {
 
         setPage(page + 1);
         updateNews()
 
     }*/

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&
        category=${props.category}&apiKey=${props.apiKey}&page=${page}&
        pageSize=${props.pageSize}`;

        let data = await fetch(url);
        let ParsedData = await data.json()

        setArticles(articles.concat(ParsedData.articles))
        setTotalResults(ParsedData.totalResults)
        setLoading(false)

    };

    return (
        <div>
            {loading &&
                <div className="Spinner-loading" >
                    <Spinner />
                </div>}

            <div className="container my-4 ">
                <div className=" my-4">
                    <h2 style={{ color: "white", textAlign: 'center' }}> NewsDaily - Top Headlines</h2>
                </div>

                {!loading && <div className="row my-4" >
                    <SwipeNews articleData={articles} />
                    <div className="my-4">
                        <h2 style={{ color: "white", textAlign: 'center' }}> {" Top " + props.category + " Headlines"}</h2>
                    </div>

                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader="" >

                        return <div className="container">
                            <div className="row">

                                {articles.map(ArticleData => {
                                    return <div className="col-md-4 col-sm my-4  d-flex justify-content-center" key={ArticleData.url}>
                                        <NewsItems Title={ArticleData.title} Description={ArticleData.description ? ArticleData.description.slice(0, 88) + "..." : ""} NewsUrl={ArticleData.url} ImageUrl={ArticleData.urlToImage} date={ArticleData.publishedAt} Author={ArticleData.author} />
                                    </div>
                                })
                                }
                            </div>
                        </div>

                    </InfiniteScroll>

                </div>}
                {/*
                    // Traditional load next and previous page
                    <div className="container d-flex justify-content-between">
                        <button disabled={page <= 1} className="btn btn-danger" onClick={handlePrevClick} >Previous</button>
                        <button disabled={page + 1 > Math.ceil(totalResults / 20)} className="btn btn-danger" onClick={handleNextClick}>Next</button>
                    </div>*/}
            </div>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News;
