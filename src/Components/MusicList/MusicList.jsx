import React, {Component} from 'react';
import axios from "axios";
import './MusicList.css'
import CreateSong from '../CreateSong/CreateSong';
import FilterSearch from '../FilteredSearch/FilteredSearch';

class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
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

    async createSong(newSong){
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
    }

    async deleteSong(element){
        let response =  await axios.delete('http://127.0.0.1:8000/music/'+element.id+'/')
        this.getSongs()
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
            return song.title.toLowerCase().includes(this.state.search.toLowerCase()) || song.artist.toLowerCase().includes(this.state.search.toLowerCase()) || song.album.toLowerCase().includes(this.state.search.toLowerCase()) || song.release_date.toLowerCase().includes(this.state.search.toLowerCase()) || song.genre.toLowerCase().includes(this.state.search.toLowerCase())
        })
        this.setState({
            songs : filteredResults
        })
    }
    

    render() { 
        return (
        <React.Fragment>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date and Time</th>
                        <th>Genre</th>
                        <th>
                            <form onSubmit = {this.handleSubmit}>
                                <input name= 'search' onChange = {this.handleChange} value = {this.state.search}/> 
                                <button type = 'submit'>Search!</button>
                            </form>
                        </th>
                        <th>
                        <button onClick = {() => this.setState(this.getSongs)}>Show All</button>
                        </th>
                    </tr>
                </thead>
                {this.state.songs.map((element) => <><tbody><tr class="active-row"><td>{element.title}</td> <td>{element.artist}</td> <td>{element.album}</td><td>{element.release_date}</td><td>{element.genre}</td><td><button onClick={() => this.deleteSong(element)}>Delete</button></td></tr></tbody></> )}      
            </table>
            <table class='styled-table'>
                <tbody>
                <tr>
                    <td class="active-row">
                    <CreateSong createSong = {this.createSong}/>    
                    </td>
                </tr>
                </tbody>
            </table>
            
        </React.Fragment> 
         );
    }
}
 
export default MusicList;