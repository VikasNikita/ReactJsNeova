import axios from "axios";
import { Component } from "react";

export default class PostComponent extends Component
{
    state={
        posts:[],
        isEditMode:false,
        postObj:{
            title:"",
            body:"",
            userId:1,
        },
    };
    onClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/" +id).then((response)=>{
            console.log(response);
            this.FetchMethod();
            alert("Deleted");
        });
    }
    onChangeHandler = (event) => 
    {
        const {name,value} =event.target;
        const postObjectCopy=this.state.postObj;
        postObjectCopy[name]=value;
        this.setState({postObj:postObjectCopy});
    };
    onEditClickHandler =(id) =>{
        const editObject=this.state.posts.find((post) => post.id=== id);
        if(editObject){
            this.setState({postObj:editObject,isEditMode:true});
        }
    };
    resetState(){
        this.setState({
            postObj:{
                title:"",
                body:"",
                userId:1,
            },
            isEditMode:false,
        });
    }
    onCancelClickHandler = (event) =>{
        event.preventDefault();
        // this.setState({
        //     postObj:{
        //         title:"",
        //         body:"",
        //         userId:1,
        //     },
        //     isEditMode:false,
        // });
        this.resetState();
    };
    onFormSubmitClick = (event) =>{
        event.preventDefault();
        if(this.state.isEditMode)
        {
            axios.put("https://jsonplaceholder.typicode.com/posts/"+this.state.postObj.id,this.state.postObj)
            .then((response)=>{console.log(response);
                this.FetchMethod();
                alert("Updated");
                this.resetState();
        })
        }else{
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state.postObj).then((response)=>{
            console.log(response);
            this.FetchMethod();
            alert("Created");
            // this.setState({
            //     postObj:{
            //         title:"",
            //         body:"",
            //         userId:1,
            //     },
            // });
            this.resetState();
        
        })
    }
    };

    render()
    {
        return(
        
            <>
                <h1>In Post</h1>
                <form onSubmit={this.onFormSubmitClick}>

                    <label >Title</label>

                    <input name="title"
                    value={this.state.postObj.title}
                    onChange={this.onChangeHandler}/>

                    <label>Body</label>

                    <input name="body"
                    value={this.state.postObj.body}
                    onChange={this.onChangeHandler}/>

                    <button type="submit">{this.state.isEditMode ? "Update" : "Submit"}</button>
                    <button onClick={this.onCancelClickHandler}>Cancel</button>
                </form>

                {this.state.posts.map((post,index)=> (
                    <div key={index}>
                        <div>
                            {index+1}.{post.title}
                            {/* <br/>
                            {index+1}.{post.body} */}
                        </div>

                        <br/>
                        
                        <button onClick={()=>{
                    this.onClickHandler(post.id);
                }}
                >
                    Delete</button>

                    <button onClick={()=>{
                        this.onEditClickHandler(post.id);
                    }}>Edit</button>


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
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log(response.data);
            this.setState({ posts: response.data });
        });
    }
}