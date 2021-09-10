import React, {Component} from 'react';


const FilterSearch = (props) =>{
    let result = props.songs.filter(element => <form><label>Filter</label><input type = 'submit' label = 'Search'></input></form>)
    return(
        <ul>
        <li>{result}</li>
        </ul>
    )
}

export default FilterSearch;