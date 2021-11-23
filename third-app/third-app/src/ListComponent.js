import React, {Component} from "react";

export default class ListComponent extends Component
{
    state={
        myList :[],
        inputValue:"",
    };
    onAdd = () => {
        const myListCopy=this.state.myList;
        myListCopy.push(this.state.inputValue);
        this.setState({myList:myListCopy,inputValue: ""});        
    };
    onInputTextChange=(event) =>{
        console.log(event.target.value);
        this.setState({inputValue :event.target.value});
    };

    render()
    {
        // const ;
        return (
            <>
                <h1>My To Do App</h1>
                <input
                    value={this.state.inputValue}
                    onChange={this.onInputTextChange}
                />
                <button onClick={this.onAdd}Add></button>
               
                {this.state.myList.map((element,index)=>(
                    <div key={index}>
                        {/* <h2>Inside the List item</h2> */}
                        <div>{element}</div>
                    </div>
                ))}
            </>
        );
    }
}