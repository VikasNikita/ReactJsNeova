import React,{Component} from "react";
export default class LifeCycle extends Component
{
    constructor ()
    {
        super();
        console.log("In Constructor");
    };
    render()
    {
        console.log("In Render");
        return <h1>In Life Cycle</h1>


    }
    componentDidMount()
    {
        console.log("In Mount");
    }

}