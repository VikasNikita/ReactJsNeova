export default (props) => {
    return (
        <>
        <h1>In NewIncrement</h1>
        Value : {props.value}
        <button onClick={props.onClickHandler}>Increment</button>
        </>
    );
}