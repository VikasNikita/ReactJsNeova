import { createStore } from "redux";

const initialState={
   personList:[],
   courseList:[],
};

const reducer = (state = initialState,action) => {
    const {type,payload} =action;
    const courseListCopy=[...state.courseList];

    const personListCopy=[...state.personList];

    switch (type) {
        case "PERSON_ADD":
            personListCopy.push(payload);
            return{
                ...state,
                personList:personListCopy,
            };

            case "PERSON_DELETE":
                
                personListCopy.splice(payload,1);
                alert("Deleted");

                return {
                    ...state,
                    personList:personListCopy,
                };

            case "COURSE_ADD":
                courseListCopy.push(payload);
                return{
                    ...state,
                    courseList:courseListCopy,
                };

                case "COURSE_DELETE":
                
                    courseListCopy.splice(payload,1);
                    alert("Deleted");
    
                    return {
                        ...state,
                        courseList:courseListCopy,
                    };
        default:
            return state;
            
    }
};

const store = createStore(reducer);

export default store;



