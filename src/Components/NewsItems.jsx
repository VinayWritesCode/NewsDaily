import React from 'react'
import ImageForNewsWithoutImage from "../resources/Images/ImageForNewsWithoutImage.png";

const NewsItems = (props) => {

    let { Title, Description, NewsUrl, ImageUrl, date, Author } = props;

    return (

        <div className="container">
            <div className="card ">
                <img src={ImageUrl ? ImageUrl : ImageForNewsWithoutImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Description}</p>
                    <p className="card-text"><small className="text-muted">Last updated {new Date(date).toGMTString()} ago {!Author ? "" : ", By " + Author + "."} </small></p>
                    <a href={NewsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark d-flex justify-content-center dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems;
