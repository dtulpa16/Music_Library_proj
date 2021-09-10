import React, {Component} from 'react';
import axios from "axios";
import './MusicList.css'

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

    deleteSong(element){
        console.log(element)
    }

    render() { 
        return ( 
            <table>
            <thead>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th><hr />
            </thead>
                {this.state.songs.map((element) => <tbody><td>{element.title}</td> <td>{element.artist}</td> <td>{element.album}</td><td>{element.release_date}</td><td>{element.genre}</td>
                <button type = 'submit' onSubmit = {this.deleteSong(element)}>Delete</button></tbody> )}      
        </table>
         );
    }
}
 
export default MusicList;