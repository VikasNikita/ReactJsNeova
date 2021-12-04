import {createStore} from "redux";


const initialState  = {
    counter:0,
};

const reducer=(state=initialState,action)=>
{
    const {type} = action;
    
    switch (type)
     {
         
        case "increment":
            return {
                counter:state.counter+1,
            };
            case "decrement":
                return {
                    counter:state.counter-1,
                };
    
        default:
            return state;
    }
   
};

const store =createStore(reducer);

export default store;