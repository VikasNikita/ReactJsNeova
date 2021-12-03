import React, { Component } from 'react';

export default class Accessibility extends Component 
{
    onButtonClickHandler = () => {
        console.log("Button Clicked");
    };
    render() {
        return (
            <>
                <h2>I am inside Accessibility</h2>
                <label htmlFor="name">Name:</label>
                <br/>
                <input
                    id="name"
                    name={"name"}
                    placeholder="please enter your name"
                    aria-label="name"
                    aria-required="true"
                />
                    <br/>
                     <button onClick={this.onButtonClickHandler}>Click Me</button>
                    <br/>
                <table>
                    <tbody>
                        <tr>
                            <td>Ankur</td>
                            <td>Ankit</td>
                        </tr>
                    </tbody>
                    
                </table>
            </>
        );
    }
}

