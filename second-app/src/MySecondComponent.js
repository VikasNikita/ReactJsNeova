import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
export default (props) =>
{
    const {parentComponentName}=props;
    return <div>
    <div>
        <h2>Hello from MySecondComponent called from {parentComponentName}</h2>

    </div>
    <FirstChild parentComponentName={"MySecondComponent"}/>
    <SecondChild parentComponentName={"MySecondComponent"}/>
    <ThirdChild parentComponentName={"MySecondComponent"}/>
    </div>
}