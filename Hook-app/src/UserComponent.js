import { useState,useEffect } from "react";
import axios from "axios";
export default  () => 
{
    const[userList,setUserList]=useState([]);
    //  const[title,setTitle]=useState("");
     const[name,setName]=useState("");
     const[username,setUserName]=useState("");
     const[email,setemail]=useState("");
     const[isEditMode,setEditMode]=useState(false);
     const[userId,setUserId]=useState(0);

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

    const onNameChange =(event) =>{
        setName(event.target.value);
    };


    const onUserNameChange =(event) =>{
        setUserName(event.target.value);
    };

    const onEmailChange =(event) =>{
        setemail(event.target.value);
    };



    const onFromSubmit =(event) =>{
        event.preventDefault();//what is
    console.log(name,username,email);
       if(!isEditMode){
       axios.post("https://jsonplaceholder.typicode.com/users",{
           name,
           username,
           email,
           userId:1,
       }).then((response) =>{
           console.log(response);
           alert("Added");
           //fetch the data again
           fetchData();
           //reset form
           setemail("");
           setName("");
           setUserName("");
       });
   } else{
   if(userId >0){
       axios.put("https://jsonplaceholder.typicode.com/users/"+userId,{
           id:userId,
           name,
           email,
           username,
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
        
    axios.delete("https://jsonplaceholder.typicode.com/users/"+id).then((response)=>{
    console.log(response);
    alert("Deleted");
    fetchData();
})
}

const onEdit =(UserObject) =>{
    console.log(UserObject);
    setEditMode(true);
    setName(UserObject.name);
    setUserName(UserObject.username);
    setemail(UserObject.setUserName);
    setUserId(UserObject.id);
};

const onRest=(event) =>{
    if (event){
        event.preventDefault();
      }
    setEditMode(false);
    setName("");
    setemail("");
    setUserName("");
};
    return(
        <>
            <h1>User Form</h1>
            <form onSubmit={onFromSubmit}>
         <label> Name: </label>
             <input name="name" value={name} onChange={onNameChange}/>
       
            <label>UserName: </label>
               <input name="username" value={username} onChange={onUserNameChange}/>

               <label>Email: </label>
               <input name="email" value={email} onChange={onEmailChange}/>

               <button type="submit">{isEditMode ? "update" : "submit"}</button>
               {isEditMode && <button onClick={onRest}>Rest:</button>}
         </form>

         <table>
             <thed>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>UserName</th>
                     <th>Email</th>
                 </tr>
                
             </thed>
             <tbody>
                 {userList.map((user,index) =>{
                     return(
                         <tr key={user.id}>
                             <td>{user.id}</td>
                             <td>{user.name}</td>
                             <td>{user.username}</td>
                             <td>{user.email}</td>
                             <button onClick={onDeleteHandler}>Delete:</button>
                         
                              <button onClick={()=>{
                                onEdit(user)
                              }}>Edit:</button>
                              </tr>
                     );
                 })}
             </tbody>
         </table>

        </>
    );

}