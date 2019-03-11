import React, { Component } from 'react';



export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [{name: "Bryan", age:32}, {name: "Steph", age:33}, {name: "Jon", bankaccount:35}],
            userInput: "",
            filteredArray: [],
        }
    }
  
    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterArray(input) {
        var list = this.state.unFilteredArray;
        var filteredList = []
     
        for(var i = 0; i < list.length; i++) {
            if ( list[i].hasOwnProperty(input) ) {
                filteredList.push(list[i]);
            }
        }
        this.setState({ filteredArray: filteredList })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzletext"> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        )   
    }
}