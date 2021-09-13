import React, {Component} from 'react';
import './App.css'
import MusicList from './MusicList/MusicList';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import PageFooter from './PageFooter/PageFooter';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
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
                <div className="my-component">

                <TitleBar/>
                <MusicList/>
                <PageFooter/>

                </div>
         );
    }
}
 
export default App;