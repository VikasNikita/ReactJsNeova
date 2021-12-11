import { useState,useEffect } from "react";
import axios from "axios";
export default  () => 
{
    const[userList,setUserList]=useState([]);
    //  const[title,setTitle]=useState("");
    //  const[name,setName]=useState("");
    //  const[username,setUserName]=useState("");
    //  const[email,setemail]=useState("");
    const[nameEditMode,setNameEditMode]=useState("");
    const[userNameEditMode,setUserNameEditMode]=useState("");
    const[emailEditMode,setEmailEditMode]=useState("");
     const[isEditMode,setEditMode]=useState(false);
     const[userId,setUserId]=useState(0);
     const[selectedPostId,setSelectedPostId]=useState(-1);
     const[editObject,setEditObject]=useState({});
     const[userObject,setUserObject]=useState({
        // title:"", 
        name:"",
        username:"",
        email:"",
     })
     useEffect(() =>{
        //code to fetch deta from server
       fetchData();
     },[]
      
     );

     const fetchData =() =>{
        //code to fetch data from server
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
           console.log(response.data);
           if(response && response.data){
               setUserList(response.data);
           }
       });
    };

    // const onNameChange =(event) =>{
    //     setName(event.target.value);
    // };


    // const onUserNameChange =(event) =>{
    //     setUserName(event.target.value);
    // };

    // const onEmailChange =(event) =>{
    //     setemail(event.target.value);
    // };



    const onFromSubmit =(event) =>{
        event.preventDefault();//what is
    // console.log(name,username,email);
       if(!isEditMode){
       axios.post("https://jsonplaceholder.typicode.com/users",{
        //    name,
        //    username,
        //    email,
        ...userObject,
           userId:1,
       }).then((response) =>{
           console.log(response);
           alert("Added");
           setUserObject({
               name:"",
               username:"",
               email:"",
           })
           //fetch the data again
           fetchData();
           //reset form
        //    setemail("");
        //    setName("");
        //    setUserName("");
       });
   } else{
//    if(userId >0){
//        axios.put("https://jsonplaceholder.typicode.com/users/"+userId,{
//            id:userId,
//            name,
//            email,
//            username,
//            userId:1,
//        }).then((response) =>{
//            if(response){
//                fetchData();
//                alert("updated");
//                onRest();
//            }
//            });
//        }
   }
   }

   const onDeleteHandler =(id)=>{
        
    axios.delete("https://jsonplaceholder.typicode.com/users/"+id).then((response)=>{
    console.log(response);
    alert("Deleted");
    fetchData();
})
}

const onEdit =(userObject) =>{
    console.log(userObject);
    // setEditMode(true);
    // setName(UserObject.name);
    // setUserName(UserObject.username);
    // setemail(UserObject.setUserName);
    // setUserId(UserObject.id);
    setNameEditMode(userObject.name);
    setUserNameEditMode(userObject.username);
    setEmailEditMode(userObject.email);
    setSelectedPostId(userObject.id);
    setUserId(userObject.id);
    setEditObject ({
        // name:"",
        // username:"",
        // email:"",
        ...userObject
    })
};

const onRest=(event) =>{
    // if (event){
    //     event.preventDefault();
    //   }
    // setEditMode(false);
    // setName("");
    // setemail("");
    // setUserName("");
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
 const onUserObjectChangeHandler = (event) => {
     if(event)
     {
         const {name,value}=event.target;
         setUserObject ({
             ...userObject,
             [name]:value,
         })
     }
 };
 const onResetRowHandler = () => {
     setSelectedPostId(-1);
     setEditObject({
         name:"",
         username:"",
         email:"",
     })
 }
 const onUpdateRowHandler = () => 
 {
    if(userId >0){
               axios.put("https://jsonplaceholder.typicode.com/users/"+userId,{
                   id:userId,
                //    name,
                //    email,
                //    username,
                ...editObject,
                //    userId:1,
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
            <h1>User Form</h1>
            <form onSubmit={onFromSubmit}>
         <label> Name: </label>
             <input name="name" value={userObject.name} onChange={onUserObjectChangeHandler}/>
       
            <label>UserName: </label>
               <input name="username" value={userObject.username} onChange={onUserObjectChangeHandler}/>

               <label>Email: </label>
               <input name="email" value={userObject.email} onChange={onUserObjectChangeHandler}/>

               <button type="submit">{isEditMode ? "update" : "submit"}</button>
               {isEditMode && <button onClick={onRest}>Rest:</button>}
         </form>

         <table>
             <thead>
                 <tr>
                     <th>Id</th>
                     <th>Name</th>
                     <th>UserName</th>
                     <th>Email</th>
                 </tr>
                
             </thead>
             <tbody>
                 {userList.map((user,index) =>{
                     return(
                         <tr key={user.id}>
                             <td>{user.id}</td>
                             <td>
                                {selectedPostId === user.id ? 
                             (<input 
                                name="name"
                                value={editObject.name}
                              onChange={onEditObjectChangeHandler}/>) 
                              :(user.name)}
                              </td>
                             <td>{selectedPostId ===user.id ? (<input 
                             name="username"
                             value={editObject.username} 
                             onChange={onEditObjectChangeHandler}/>) 
                             : (user.username)}</td>
                             <td>{selectedPostId === user.id ? (<input
                             name="email"
                             value={editObject.email}
                             onChange={onEditObjectChangeHandler}/>) : (user.email)}</td>
                             <td>{selectedPostId === user.id ? (<>
                                <button onClick={onUpdateRowHandler}>Update</button>
                                <button onClick={onResetRowHandler}> Reset</button>
                             </>) : (<>
                                <button
                                    onClick={() =>{
                                        onDeleteHandler(user.id);
                                    }}
                                >Delete
                                </button>
                                <button onClick={()=>{ onEdit(user)}}>Edit:</button>
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