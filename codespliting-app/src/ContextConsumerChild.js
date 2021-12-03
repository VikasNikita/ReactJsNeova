import React, { Component } from 'react';
import { PersonConsumer, PersonProvider } from './PersonContext';

export default class ContextConsumerChild extends Component {
    render() {
        return (
            <>
              <h1>In ContextConsumerChild</h1>
              <PersonConsumer>
                    {(value) => {
                        console.log(value);
                        return (<h2>The Latest value in context is {value.name} and age is {" "} {value.age}{" "}</h2>
                        );
                    }}  
                </PersonConsumer> 
            </>
        );
    }
}