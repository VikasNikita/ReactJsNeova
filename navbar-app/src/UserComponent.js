import axios from 'axios';
import React, { Component } from 'react';

class UserComponent extends Component 
{
    state={
        users:[],
        userObj:{
            id:1,
            name:"",
            email:"",
            username:"",
        },
        isEditMode:false,

    };
    onChangeHandler =(event) =>{
        const {name,value}=event.target;
        const userObjCopy=this.state.userObj;
        userObjCopy[name]=value;
        this.setState({userObj:userObjCopy});
    }
    onClickHandler = (id) =>
    {
        axios.delete("https://jsonplaceholder.typicode.com/users/"+id).then((response)=>{
            console.log(response);
            this.FetchData();
            alert("Deleted");
        });
    }
    onCancelClickHandler = (event) =>{
        event.preventDefault();
        this.resetState();

    }
    resetState(){
        this.setState({
            userObj:{
                id:1,
                name:"",
                username:"",
                email:"",
            },
            isEditMode:false,
        });
    }
    onFormSubmitClick=(event)=>{
        event.preventDefault();
        if(this.state.isEditMode)
        {
            axios.put("https://jsonplaceholder.typicode.com/users/"+this.state.userObj.id,this.state.userObj)
            .then((response)=>{console.log(response);
                this.FetchData();
                alert("Updated");
                this.resetState();

            })
        }else
        {
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/users",this.state.userObj)
        .then((response)=>{console.log(response);
            this.FetchData();
            alert("Created");
            this.resetState();
        })
        }
    };
    onEditClickHandler = (id) =>{
        const editObject=this.state.users.find((user) => user.id===id);
        if(editObject)
        {
            this.setState({userObj:editObject,isEditMode:true});
        }
    };
    render() {
        return (
           <>
            <h1>In User</h1>

                <form onSubmit={this.onFormSubmitClick}>

                <label>Name</label>
                <input
                    name="name"
                    value={this.state.userObj.name}
                    onChange={this.onChangeHandler}
                />
                <br/>
                <label>UserName</label>
                <input
                    name="username"
                    value={this.state.userObj.username}
                    onChange={this.onChangeHandler}
                />
                <br/>
                <label>EmailId</label>
                <input 
                    name="email"
                    value={this.state.userObj.email}
                    onChange={this.onChangeHandler}
                />
                <br/>

                <button type="submit">{this.state.isEditMode ? "Update" : "Submit"}</button>
                <button onClick={this.onCancelClickHandler}>Cancel</button>


                </form>

            {this.state.users.map((user,index)=>(
                <div key={index}> 
                    <div>
                    {index+1}.{user.name}
                    <br/>
                    {index+1}.{user.username}
                    <br/>
                    {index+1}.{user.email}
                    <br/>
                </div>
                <br/>

                    <button onClick={()=>{
                        this.onClickHandler(user.id);
                    }}>Delete</button>


                    <button onClick={()=>{
                        this.onEditClickHandler(user.id);
                    }}>Edit</button>


                </div>
            ))}
           </>
        );
    }
    componentDidMount()
    {
        this.FetchData();
    }

    FetchData() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            console.log(response.data);
            this.setState({
                users: response.data
            });
        });
    }
}

export default UserComponent;