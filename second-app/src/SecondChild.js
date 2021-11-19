export default (props) =>
{
    const{parentComponentName}=props;
    return <>
        <h6>Second child called from {parentComponentName}</h6>
    </>
}