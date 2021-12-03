import React ,{Component} from "react";

export default class DynamicClassComponent extends Component
{
    state={
       percentage:0,
       result:"Invalid",
       color:"white",
       
    };
    onClickHandler = () =>{
        
            // result:this.calculateResult(this.state.percentage)
            const {result,color}=this.calculateResult(this.state.percentage);
            this.setState({result,color});
    };
    onCalculateHandler = (event) =>{
        console.log("In Handler");
        this.setState({
            percentage:event.target.value

        });
    };
    calculateResult=(percentage) =>{
        let resultObj=
        {
            result:"Invalid",
            color:"white",
        };
        if(percentage <35 && percentage >=0)
        {
            // result="Fail"
            resultObj={
                result:"Fail",
                color:"red",
            }
        }
        else if(percentage >=35 && percentage <=50)
        {
            // result="Just Pass"
            resultObj={
                result:"Just Pass",
                color:"orange",
            }
        }
        else if(percentage > 50 && percentage <=60)
        {
            // result="Second Class"
            resultObj={
                result:"Second Class",
                color:"yellow",
            }
        }
        else if(percentage >=60 && percentage <=70)
        {
            // result="First Class"
            resultObj={
                result:"First Class",
                color:"green",
            }
        }
        else if(percentage>=70 && percentage <=100)
        {
            // result="Distinction"
            resultObj={
                result:"Distinction",
                color:"#5e2a5e",
            }
        }
            return resultObj;
        
    }
    render()
    {
        return(
            <>
                <h1>Calculate Marks</h1>
                <input 
                    value={this.state.percentage}
                    onChange={this.onCalculateHandler}
                />
                <button onClick={this.onClickHandler}>calculateResult</button>
                <div style={{backgroundColor: this.state.color}}>Result is : {this.state.result}</div>
            </>
        );
    }
}