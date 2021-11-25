import React,{Component} from "react";

class SetState extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            count:0,
        };
    }
    Increament =()=>{
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log("callback value",this.state.count);
        }
        )
        console.log(this.state.count);
    }
    render()
    {
        return(
            <div>
                <div>count{this.state.count}</div>
                <button onClick={() =>this.Increament()}>Increament</button>
            </div>
        );
    }
}
export default SetState;