export default (props) =>
{
const{parentComponentName}=props;
    return <>
        <h6>Third child called from {parentComponentName}</h6>
    </>
}