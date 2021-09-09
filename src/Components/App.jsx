import React, {Component} from 'react';
import './App.css'
import MusicList from './MusicList/MusicList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }



    render() { 
        return ( 
            <React.Fragment>
                <MusicList/>
            </React.Fragment>
         );
    }
}
 
export default App;