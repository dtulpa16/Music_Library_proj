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
        console.log(response)
        this.getSongs()
    }

    render() { 
        return (
        <React.Fragment>
            <table width = '100%'>
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date and Time</th>
                    <th>Genre</th>
                </thead>
                {this.state.songs.map((element) => <><tbody><td>{element.title}</td> <td>{element.artist}</td> <td>{element.album}</td><td>{element.release_date}</td><td>{element.genre}</td><td><button onClick={() => this.deleteSong(element)}>Delete</button></td></tbody></> )}      
            </table>
            <CreateSong createSong = {this.createSong}/>
        </React.Fragment> 
         );
    }
}
 
export default MusicList;