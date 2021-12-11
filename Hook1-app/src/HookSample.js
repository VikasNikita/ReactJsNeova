import axios from "axios";
import { useEffect, useState } from "react"

 export default () =>{
     const[postList,setPostList]=useState([]);
    //  const[title,setTitle]=useState("");
     const[titleEditMode,setTitleEditMode]=useState("");
    //  const[body,setBody]=useState("");
     const[bodyEditMode,setBodyEditMode]=useState("");
     const[isEditMode,setEditMode]=useState(false);
     const[postId,setPostId]=useState(0);
     const[selectedPostId,setSelectedPostId]=useState(-1);
     const[editObject,setEditObject]=useState({});
    const[postObject,setPostObject]=useState({
        title:"",
        body:"",
    });

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

    //  const onTitleChange =(event) =>{
    //      setTitle(event.target.value);
    //  };
    //  const onBodyChange =(event) =>{
    //     setBody(event.target.value);
    // };
    // const onDelete =(event) =>{
    //     setBodys(event.target.value);
    // };
    // const onTitleEditModeChange = (event)=>{
    //     setTitleEditMode(event.target.value);
    // }
    // const onBodyEditModeChange =(event) =>{
    //     setBodyEditMode(event.target.value);
    // };

    const onFromSubmit =(event) =>{
         event.preventDefault();//what is
    //  console.log(title,body);
        if(!isEditMode){
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            // title,
            // body,
            ...postObject,
            userId:1,
        }).then((response) =>{
            console.log(response);
            alert("Added");
            setPostObject({
                title:"",
                body:"",
            });
            //fetch the data again
            fetchData();
            //reset form
            // setTitle("");
            // setBody("");
        });
    } else{
    if(postId >0){
        axios.put("https://jsonplaceholder.typicode.com/posts/"+postId,{
            id:postId,
            // title,
            // body,
            ...postObject,
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
        //   setEditMode(true);
          setTitleEditMode(postObject.title);
          setBodyEditMode(postObject.body);
          setPostId(postObject.id);
          setSelectedPostId(postObject.id);
          setEditObject({
              ...postObject
          })
      };


      const onEditObjectChangeHandler = (event) =>
     {
        // const titleOld = {
        //     title='a',
        //     body='b',
        // }
        // const titleNew = {
        //     title:titleOld.title,
        //     body:titleOld.body,
        //     title:"c"
        // };


        if(event) {
            const {name,value}=event.target;
            setEditObject ({
                ...editObject,
                [name]:value,
            })
        }

      };
      const onPostObjectChangeHandler = (event) => {
        if(event)
        {
            const {name,value}=event.target;
            setPostObject ({
                ...postObject,
                [name]:value,
            })

        }
      };
      const onRest=(event) =>{
        //   if (event){
        //       event.preventDefault();
        //     }
        //   setEditMode(false);
        //   setTitle("");
        //   setBody("");
      };

      const onResetRowHandler = () => {
          setSelectedPostId(-1);
          setEditObject({
              title:"",
              body:"",
          });
      }
    const onUpdateRow = () =>
    {
        if(postId >0){
            axios.put("https://jsonplaceholder.typicode.com/posts/"+postId,{
                // id:postId,
                // // title,
                // // body,
                ...editObject,
                // userId:1,
            }).then((response) =>{
                if(response){
                    fetchData();
                    alert("updated");
                    onResetRowHandler();
                }
                });
            }
    }
     return(
         <>
         <h1>From HookSample</h1>
         <h1>Post From</h1>
         <form onSubmit={onFromSubmit}>
         <label> Title: </label>
             <input name="title" value={postObject.title} onChange={onPostObjectChangeHandler}/>
       
            <label>Body: </label>
               <input name="body" value={postObject.body} onChange={onPostObjectChangeHandler}/>

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
                             <td>
                                {selectedPostId === post.id ? 
                             (<input 
                                name="title"
                                value={editObject.title}
                              onChange={onEditObjectChangeHandler}/>) 
                              :(post.title)}
                              </td>
                             <td>{selectedPostId ===post.id ? (<input 
                             name="body"
                             value={editObject.body} 
                             onChange={onEditObjectChangeHandler}/>) 
                             : (post.body)}</td>
                             <td>{selectedPostId === post.id ? (<>
                                <button onClick={onUpdateRow}>Update</button>
                                <button onClick={onResetRowHandler}> Reset</button>
                             </>) : (<>
                                <button
                                    onClick={() =>{
                                        onDeleteHandler(post.id);
                                    }}
                                >Delete
                                </button>
                                <button onClick={()=>{ onEdit(post)}}>Edit:</button>
                             </>)}
                             </td>
                             {/* <button onClick={onDeleteHandler}>Delete:</button> */}
                             
                              </tr>
                        );
                 })}
             </tbody>
         </table>
         </>
     );
        
    
 }