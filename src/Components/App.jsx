import React, {Component} from 'react';
import './App.css'
import MusicList from './MusicList/MusicList';
import axios from 'axios';
import FilterSearch from './FilteredSearch/FilteredSearch';


class App extends Component {
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

    render() { 
        return ( 
            <React.Fragment>
                <FilterSearch songs = {this.state.songs}/>
                <MusicList/>
            </React.Fragment>
         );
    }
}
 
export default App;