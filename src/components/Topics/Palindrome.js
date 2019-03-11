import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor () {
        super()
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    palindromeCheck(userInput) {
        let string = userInput
        let reversedString = userInput.split("").reverse().join("")

        if (string === reversedString) {
            this.setState({palindrome : 'true'})
        } else {
            this.setState({palindrome : 'false'})
        }
    }
    


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.palindromeCheck(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}