import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" id={newsUrl}>
          <img src={imageUrl} className="card-img-top" alt="img"  height={200} width={200}/>
          <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
              <span className="visually-hidden"></span>{source}</span>
            <h5 className="card-title"><span className="badge bg-secondary">{title? title.slice(0,30)+"...": "no title avaialable here <br/>"}</span></h5>
            <p className="card-text">{description? description.slice(0,48)+"...": "no description avaialable here..."}</p>
            <p className="card-text"><small className="text-muted">By {author?author.slice(0,10)+"..":"unknow"} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="blank" className="btn btm-sm btn-dark" >Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
