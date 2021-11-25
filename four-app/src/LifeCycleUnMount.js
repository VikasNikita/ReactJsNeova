import React, {Component} from "react";

export default class LifeCycleUnMount extends Component
{
    render(){
        console.log("In Rendered");
        return(
            <h1>In LifeCycleUnMount</h1>
        );
    }
    componentWillUnmount()
    {
        console.log("in Unmount");
    }
}