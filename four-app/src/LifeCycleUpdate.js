import React,{Component} from "react" ;
import LifeCycleUnMount from "./LifeCycleUnMount";

export default class LifeCycleUpdate extends Component
{
    state=
    {
        showtext:true,
    }
    onClickHandler =() =>{
        this.setState({showtext:!this.state.showtext});
    };
    render()
    {
        return (
        <>
            {this.state.showtext && 
            (
            <>
            <h1>In Life Cycle</h1>
            <LifeCycleUnMount/>
            </>
            )}
            <button onClick={this.onClickHandler}>Toggle</button>
        </>
        );
    }
    componentDidUpdate()
    {
        // console.log("In did component");
    }


}