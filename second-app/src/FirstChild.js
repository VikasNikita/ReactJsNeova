export default  (props) =>
{
    const{parentComponentName}=props;
    return <>
        <h6>First child called from {parentComponentName}</h6>
        
    </>
}