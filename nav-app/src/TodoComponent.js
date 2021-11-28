import axios from "axios";
import { Component } from "react";

export default class TodosCom extends Component
{
    state={
        todos:[],
    };
    
        onClickHandler=(id)=>{
            axios.delete("https://jsonplaceholder.typicode.com/todos/" +id).then((response)=>{
                console.log(response);
                this.FetchMethod();
                alert("Deleted");
    
    
            });
        }
    
    render()
    {
        return(
            <>
                <h1>In Todos</h1>
                {this.state.todos.map((todo,index)=>(
                    <div key={index}>
                        <div>
                        {index+1}.{todo.title}
                        </div>
                        <br/>
                        <button onClick={()=>{
                    this.onClickHandler(todo.id); }}>Delete</button>
                    </div>
                    
                     ))}
                </>
        )
    }
    componentDidMount()
    {
        this.FetchMethod();
    }

    FetchMethod() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            console.log(response.data);
            this.setState({ todos: response.data });
        });
    }
}