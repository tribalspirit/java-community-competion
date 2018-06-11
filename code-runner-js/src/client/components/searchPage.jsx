import React, {Component} from "react"
import Search from "./search"
import ResultCard from "./resultCard"
import MovieDetail from "./movieDetail"
import dataService from "../services/dataService"

const SEARCH_MOVIES_URL = 'http://react-cdp-api.herokuapp.com/movies?'
const MOVIE_DETAIL_URL = 'http://react-cdp-api.herokuapp.com/movies/'

class Page extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      error: null,
      searchResult: [],
      currentHeader: 'search'
    }

    this.openMovieDetail = this.openMovieDetail.bind(this);
    this.changeHeader = this.changeHeader.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
  }

  errorHandler(error) {
    this.setState({
      isLoaded: true,
      error
    });
  }

  search = (value, by) => {
    dataService.fetchData(`${SEARCH_MOVIES_URL}${value}&searchBy=${by}`)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            searchResult: result.data
          });
        },
        this.errorHandler
      )
  }

  changeHeader(type) {
    this.setState({
      currentHeader: type
    })
  }

  openMovieDetail(movieId) {
    dataService.fetchData(`${MOVIE_DETAIL_URL}${movieId}`)
      .then(
        (result) => {
          this.setState({
            currentPage: 'detail'
          });
        },
        this.errorHandler
      )
    this.changeHeader('detail')
  }

  backToSearch() {
    this.changeHeader('search')
    this.setState({
      searchResult: []
    })
  }
  
  render() {
    return <div id='page'>
      <div id='header'>
        {
          this.state.currentHeader === 'search'
            ? <Search type="search" search={this.search}/>
            : <MovieDetail type="movie-detail" backToSearch={this.backToSearch}/>
        }
      </div>
      <div className='results'>
        {this.state.searchResult.length === 0
          ? 'No film found'
          : this.state.searchResult.map((result, index) => {
            return <ResultCard key={ result.id } data={result} onClickHandler={this.openMovieDetail}/>;
          })
        }
      </div>
    </div>
  }
}

export default Page;