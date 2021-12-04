const redux=require("redux");
//console.log(redux);

//create base state object

const initialState={
    counter: 0,
    
};

//Creater a new reducer
const reducer=(state=initialState,action) =>{
    // if(action.type === "increment")
    // {
    //     return {
    //         counter: state.counter+1,
    //     };
    // }
    // else if(action.type === "decrement")
    // {
    //     return {
    //         counter: state.counter-1,
    //     };
    // }
    // else{
    //     return state;
    // }
    const {value,type}=action;
    switch (type) {
        case "increment":
        return {
                counter : state.counter+value,
            };
        case "decrement" :
            return {
                counter : state.counter-value,
            };
           
        case "multiplication" :
            return {
                counter :state.counter*value,
            };
        default:
            return state;
            break;
    }
};

//Create a new store
const store =redux .createStore(reducer);

//console.log(store);

//Subscription Handler

const storeSubscriber = () =>{
    const currentState=store.getState();
    console.log(currentState);
};

//subscribe to the store
store.subscribe(storeSubscriber);

//Dispatch

store.dispatch({type:"increment",value:5});
store.dispatch({type:"increment",value:2});
store.dispatch({type:"decrement",value:2});
store.dispatch({type:"multiplication",value:3});
