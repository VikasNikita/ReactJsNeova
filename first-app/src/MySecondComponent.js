// import FirstChild from "./FirstChild";
// import SecondChild from "./SecondChild";
// import ThirdChild from "./ThirdChild";
//Step : first
// function MySecondComponent()
// {
//     return(
//         <div>I am my side MySecond Component</div>
//     );
// }

// export default MySecondComponent

//Step-2
// const MySecondComponent = () =>
// {
//     return <div>I am my side MySecond Component</div>
// }

// export default MySecondComponent

export default (props) =>
{
    const {name,age}=props;
    // console.log(props);
    console.log(name);
    console.log(age);
   return(
       <>
        <h2>I am {name} and I am {age} year old and I am my side MySecond Component</h2>
        {/* <FirstChild/>
        <SecondChild/>
        <ThirdChild/> */}
        </>
);
}

//   export default MySecondComponent
