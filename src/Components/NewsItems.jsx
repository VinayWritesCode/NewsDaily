import React, { Component } from 'react'

export class NewsItems extends Component {
    
    render() {
        let { Title, Description, NewsUrl , ImageUrl} = this.props;
        
        return (
            
            <div>
                <div className="card m-3" style={{width: "18rem"} }>
                    <img src={ImageUrl}  className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{Title}</h5>
                        <p className="card-text">{Description}</p>
                            <a href={NewsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems;
