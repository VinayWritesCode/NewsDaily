import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import '../resources/stylesheets/Spinner.css';
import PropTypes from 'prop-types';
import SwipeNews from './SwipeNews';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    funcToCapitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            totalPage: 0
        }

        document.title = this.funcToCapitalizeString(this.props.category + " - NewsDaily");
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let ParsedData = await data.json()
        this.props.setProgress(60);
        this.setState({
            articles: ParsedData.articles,
            totalResults: ParsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
      this.updateNews();    
    }

    /*handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews()
    }

    handleNextClick = async () => {

        this.setState({ page: this.state.page + 1 });
        this.updateNews()

    }*/

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&
        category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&
        pageSize=${this.props.pageSize}`;
        
        let data = await fetch(url);
        let ParsedData = await data.json()

        this.setState({
            articles: this.state.articles.concat(ParsedData.articles), loading: false,
            totalResults: ParsedData.totalResults
        })

    };

    render() {
        return (
            <div>
                {this.state.loading &&
                    <div className="Spinner-loading" >
                        <Spinner />
                    </div>}

                <div className="container my-4 ">
                    <div className=" my-4">
                        <h2 style={{ color: "white", textAlign: 'center' }}> NewsDaily - Top Headlines</h2>
                    </div>

                    {!this.state.loading && <div className="row my-4" >
                        <SwipeNews articleData={this.state.articles} />
                        <div className="my-4">
                            <h2 style={{ color: "white", textAlign: 'center' }}> {" Top " + this.props.category + " Headlines"}</h2>
                        </div>

                        <InfiniteScroll
                            dataLength={this.state.articles.length }
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults }
                            loader="" >

                            return <div className="container">
                                <div className="row">
                                    
                                    {this.state.articles.map(ArticleData => {
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
                        <button disabled={this.state.page <= 1} className="btn btn-danger" onClick={this.handlePrevClick} >Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-danger" onClick={this.handleNextClick}>Next</button>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default News;
