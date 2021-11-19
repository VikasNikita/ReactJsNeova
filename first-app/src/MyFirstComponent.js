import FirstChild from "./FirstChild"; 
import SecondChild from "./SecondChild"; 
import ThirdChild from "./ThirdChild";
// function MyFirstComponent()
// {
//     return (
//     <div> I am side My First Component
//     </div>
//     );
// }

// export default MyFirstComponent
function MyFirstComponent(props)
{
    // console.log(name);
    // console.log(age);
    const {name,age}=props;
     console.log(name);
     console.log(age);
    return (
        <>
    <h2> I am {name} ,I am {age} years old I am side My First Component</h2>
    <FirstChild/>
    <SecondChild/>
    <ThirdChild/>
    </>
    );
}

export default MyFirstComponent

