import FirstChild from "./FirstChild"
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
export default (props) =>
{
        const { parentComponentName }=props;
    return <div>
    <div>
        <h2>Hello from MyFirstComponent called from {parentComponentName}</h2>

    </div>
    <FirstChild parentComponentName={"MyFirstComponent"}/>
    <SecondChild parentComponentName={"MyFirstComponent"}/>
    <ThirdChild parentComponentName={"MyFirstComponent"}/>
    </div>
        
}