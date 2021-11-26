import React,{Component} from "react";

export class RefsComponent extends Component
{
    constructor()
    {
        super();
        this.inputRef=React.createRef();
    }
    render()
    {
        return(

            <>
                <h1>Hello from RefsComponent Exmples</h1>
                <input type="text" ref={this.inputRef}/>
            </>
        );
    }
    componentDidMount()
    {
        console.log(this.inputRef.current);
        this.inputRef.current.focus();
    }
}