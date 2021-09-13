import React, {Component} from 'react';
import axios from 'axios';

class FilteredSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs:[],
      search: ''
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
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) =>{
    event.preventDefault();
    this.filteredSearch()
}

filteredSearch = () =>{
    let filteredResults = this.state.songs.filter(song => {
      return song.title === this.state.search
    })
    return <h1>{filteredResults.title}</h1>
}

  render() { 
    return ( 
      <React.Fragment>
      <form onSubmit = {this.handleSubmit}>
      <label>Search song</label>
      <input name= 'search' onChange = {this.handleChange}/> 
      <button type = 'submit'>Search!</button>
      </form>
      </React.Fragment>
     );
  }
}
 
export default FilteredSearch;