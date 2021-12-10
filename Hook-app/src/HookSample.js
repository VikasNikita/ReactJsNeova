import axios from "axios";
import { useEffect, useState } from "react"

 export default () =>{
     const[postList,setPostList]=useState([]);
     const[title,setTitle]=useState("");
     const[body,setBody]=useState("");
     const[isEditMode,setEditMode]=useState(false);
     const[postId,setPostId]=useState(0);


     useEffect(() =>{
        //code to fetch deta from server
       fetchData();
     },[]
      
     );
     const fetchData =() =>{
         //code to fetch data from server
         axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data);
            if(response && response.data){
                setPostList(response.data);
            }
        });
     };

     const onTitleChange =(event) =>{
         setTitle(event.target.value);
     };
     const onBodyChange =(event) =>{
        setBody(event.target.value);
    };
    const onDelete =(event) =>{
        setBody(event.target.value);
    };

    const onFromSubmit =(event) =>{
         event.preventDefault();//what is
     console.log(title,body);
        if(!isEditMode){
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title,
            body,
            userId:1,
        }).then((response) =>{
            console.log(response);
            alert("Added");
            //fetch the data again
            fetchData();
            //reset form
            setTitle("");
            setBody("");
        });
    } else{
    if(postId >0){
        axios.put("https://jsonplaceholder.typicode.com/posts/"+postId,{
            id:postId,
            title,
            body,
            userId:1,
        }).then((response) =>{
            if(response){
                fetchData();
                alert("updated");
                onRest();
            }
            });
        }
    }
    }

    const onDeleteHandler =(id)=>{
        
            axios.delete("https://jsonplaceholder.typicode.com/posts/"+id).then((response)=>{
            console.log(response);
            alert("Deleted");
            fetchData();
        })
    }
      const onEdit =(postObject) =>{
          console.log(postObject);
          setEditMode(true);
          setTitle(postObject.title);
          setBody(postObject.body);
          setPostId(postObject.id);
      };

      const onRest=(event) =>{
          if (event){
              event.preventDefault();
            }
          setEditMode(false);
          setTitle("");
          setBody("");
      };
     return(
         <>
         <h1>From HookSample</h1>
         <h1>Post From</h1>
         <form onSubmit={onFromSubmit}>
         <label> Title: </label>
             <input name="title" value={title} onChange={onTitleChange}/>
       
            <label>Body: </label>
               <input name="body" value={body} onChange={onBodyChange}/>

               <button type="submit">{isEditMode ? "update" : "submit"}</button>
               {isEditMode && <button onClick={onRest}>Rest:</button>}
         </form>
         <table>
             <thed>
                 <tr>
                     <th>ID</th>
                     <th>Title</th>
                     <th>Body</th>
                 </tr>
                
             </thed>
             <tbody>
                 {postList.map((post,index) =>{
                     return(
                         <tr key={post.id}>
                             <td>{post.id}</td>
                             <td>{post.title}</td>
                             <td>{post.body}</td>
                             <button onClick={onDeleteHandler}>Delete:</button>
                         
                              <button onClick={()=>{
                                onEdit(post)
                              }}>Edit:</button>
                              </tr>
                     );
                 })}
             </tbody>
         </table>
         </>
     );
        
    
 }