import React, {Component} from 'react';
import axios from 'axios';

class FilteredSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs:[],
      search: '',
      searchResult: ''
     }
  }

  componentDidMount(){
    this.getSongs()
}

async getSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    this.setState({
        songs: response.data
    })
}  


  handleChange = (event) =>{
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) =>{
    event.preventDefault();
    this.filteredSearch()
}

filteredSearch = (props) =>{
    let filteredResults = this.state.songs.filter(song => {
      return song.title === this.state.search
    })
    return filteredResults
}

  render() { 
    return ( 
      <React.Fragment>
      <form onSubmit = {this.handleSubmit}>
      <label>Search song</label>
      <input name= 'search' onChange = {this.handleChange} value = {this.state.search}/> 
      <button type = 'submit'>Search!</button>
      </form>
      <h1>{this.filteredResults}</h1>
      </React.Fragment>
     );
  }
}
 
export default FilteredSearch;