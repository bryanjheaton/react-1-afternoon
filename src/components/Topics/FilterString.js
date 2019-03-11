import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ["hello", "bonjour", "hola"],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState ({ userInput: val })
    }

    filtration(input) {
        var startArray = this.state.unFilteredArray
        var newArray = []

        for (var i = 0; i < startArray.length; i++) {
            if  (startArray[i].startsWith(input)) {
                newArray.push(startArray[i]);
            }
        }
        this.setState({filteredArray : newArray})
    }


    render() {
        return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzletext"> Unfiltered: {JSON.stringify(this.state.unFilteredArray)} </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.filtration(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterStringRB"> Filtered: {JSON.stringify(this.state.filteredArray)} </span>
        </div>
        )
    }
}

