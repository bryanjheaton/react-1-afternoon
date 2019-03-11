import React, { Component } from 'react'

class EvenAndOdd extends Component{
    constructor () {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }    

    handleChange(val) {
        console.log(val)
        this.setState({ userInput: val })
    }

    evenOddParser(userInput) {
        let array = userInput.split(','); 
        let evens = [];
        let odds = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
             evens.push( parseInt(array[i], 10) );   
            } else {
             odds.push( parseInt(array[i], 10) );
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    }

    render() {
        return(
        <div className="puzzleBox EvenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => {this.evenOddParser(this.state.userInput) }}>split</button>
            <span className="resultsBox">{ JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">{ JSON.stringify(this.state.oddArray)}</span>
        </div>
        )
    }
}

export default EvenAndOdd