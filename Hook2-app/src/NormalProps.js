// name = {()=>{
//     return a;---------------->props.name->() =>{
//                                         return a;
//                                     }
//                                     props.name()->'a'//invoke name
// }
// }
export default (props) => 
{
   return <h1>In Normal Props :{props.render("New Value")}</h1>
}