import React,{Component} from "react";

export default class DynamicClass extends Component
{
    state={
        isTrue:true,
        colorList:["red","yellow","blue","green","orange"],
        increament:0,
    };
    onClickHandler =()=>{
        this.setState({
            isTrue:this.state.isTrue,
        })
    }
    onClickUpdateHandler = () => 
    {
        console.log("In Handler")
        console.log((this.state.increament+1)%5);
        this.setState({
            increament:(this.state.increament+1)%5
        });
    }
    render()
    {
        return(
            <>
            <h1>In Dynamic class</h1>
            {/* <div className={this.state.isTrue ? "my-class-true" : "my-class-false"} > In Div with {this.state.isTrue ? "true" : "false"} Condition</div> */}
            <div style={{backgroundColor:this.state.colorList[this.state.increament]}}>In dynamic style div</div>
            {/* <div className={"my-class-false"}>In Dynamic Class Inside div false</div> */}
            {/* <button onClick={this.onClickHandler}>Update</button> */}
            <button onClick={this.onClickUpdateHandler}>Update</button>
            </>
        );
    }
}