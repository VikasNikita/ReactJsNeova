export default (props) => {
    return (
        <>
            <h1>In NewDecrement</h1>
            Value : {props.value}
            <button onClick={props.onClickHandler}>Decrement</button>
        </>
    );
}