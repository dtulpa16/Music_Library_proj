import React, {Component} from 'react';
import axios from "axios";

class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songsFromAPI: []
         }
    }

    componentDidMount(){
        this.getSongs()
    }

    async getSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songsFromApi: response.data.music
        })
    }

    render() { 
        return ( 
            <div>
            {this.state.songsFromAPI.map(song => <h1>{song.title}</h1>)}
            </div>  
         );
    }
}
 
export default MusicList;