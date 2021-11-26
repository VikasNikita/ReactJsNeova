import React,{Component} from "react";

export default class RefsCallBackComponent extends Component{
    constructor()
    {
        super();
        this.inputRef=null;
    }
    onClickHandler = () =>{
        console.log("In Handler");
        console.log(this.inputRef.value);
    }
    render()
    {
        return(
            <>
                <h1>In callback reference</h1>
                <input type="text" ref ={(ref) =>
                    {
                    this.inputRef=ref
                    }}
                    />
                    <button onClick={this.onClickHandler}>ClickMe</button>
            </>
        );
    }
    componentDidMount()
    {
        console.log(this.inputRef);
        this.inputRef.focus();
    }
}