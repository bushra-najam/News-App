import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    pageSize: 9,
    country: 'us',
    category: 'general'
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }

    document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`;
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=488ebde92eb8458883e0d604c886eedf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }

  handlePrevious = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }

  isLastPage = () => {
    let totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    if (this.state.page + 1 <= totalPages)
      return false
    else
      return true
  }
 capitalize =(str) =>{
   let newstr = str.charAt(0).toUpperCase() + str.slice(1);
   return newstr;
 }
  render() {
    return (
      <div className='container my-3' >
        <h1 className='text-center'>NewsMonkey- Top Headlines from {this.capitalize(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4 my-3' key={element.url}>
              <NewsItem title={element.title} description={element.description}
                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                date={element.publishedAt} source={element.source.name} />
            </div>
          }
          )}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" className="btn btn-dark" disabled={this.state.page <= 1 ? true : false} onClick={this.handlePrevious}>&larr;Previous</button>
          <button type="button" disabled={this.isLastPage()} className="btn btn-dark" onClick={this.handleNext}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
