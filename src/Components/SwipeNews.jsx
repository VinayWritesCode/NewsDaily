import React, { Component } from 'react'
import ImageForNewsWithoutImage from "../resources/Images/ImageForNewsWithoutImage.png";
import '../resources/stylesheets/SwipeNews.css';

export class SwipeNews extends Component {

    render() {
        let { articleData } = this.props;
        
            let elementImage = articleData.map((elements) => {
                if (elements.urlToImage === null){
                    return ImageForNewsWithoutImage;
                }
                else {
                    return elements.urlToImage
                }
            })

        let elementTitle = articleData.map((elements) => {
            if (elements.title === null) {
                return "Breaking News";
            }
            else {
                return elements.title;
            }
        })

        let elementUrl = articleData.map((elements) => {
            if(elements.url === null){
                return "";
            }
            else {
                return elements.url;
            }
        })
        
    
        return (
            <div className="container" >
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" onMouseOver={this.showTitle} >

                        <div> <div className="carousel-item active">
                            <div className="contain">
                                <a href={elementUrl[0]} target="_blank" rel="noreferrer">
                                <img src={elementImage[0]}  className="d-block w-100 img" alt="Top news 1" />
                            <div className="title">
                                <h2>{elementTitle[0]}</h2>
                            </div>
                            </a>
                            </div>
                        </div>
                            <div className="carousel-item">
                                <div className="contain">
                                    <a href={elementUrl[1]} target="_blank" rel="noreferrer">
                                    <img src={elementImage[1]}  className="d-block w-100 img" alt="Top news 2" />
                                <div className="title">
                                    <h2>{elementTitle[1]}</h2>
                                </div>
                                </a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="contain">
                                    <a href={elementUrl[2]} target="_blank" rel="noreferrer">
                                    <img src={elementImage[2]} className="d-block w-100 img" alt="Top news 3" />
                                <div className="title">
                                    <h2>{elementTitle[2]}</h2>
                                </div>
                                </a>
                                </div>
                            </div>
                            
                        </div>


                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default SwipeNews
