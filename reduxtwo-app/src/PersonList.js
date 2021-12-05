import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonList extends Component 
{
    onDeleteClickHandler =(payload) => 
    {

    }
    render() {
        return (
            <>
             <h1> PersonList </h1> 
             <table className={"table"}>
                 <thead>
                        <tr>
                            <th>Sr.NO</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                 </thead>
                 <tbody>
                     {this.props.PersonList.map((person,index) =>{
                         return (
                             <tr>
                                 <td>{index+1}</td>
                                 <td>{person.name}</td>
                                 <td>{person.age}</td>
                                 <td>
                                     <button className="btn btn-danger" onClick={()=> {
                                         this.props.deletePersonbyIndex(index)}}>Delete</button>
                                 </td>
                             </tr>
                         );
                     })}
                 </tbody>
             </table>
            </>
        );
    }
}
const mapStateStateToProps = (state) => {
    return {
        PersonList:  state.personList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deletePersonbyIndex: (index) => dispatch ({type :"PERSON_DELETE",payload:index}),
    };
};
export default connect(mapStateStateToProps,mapDispatchToProps)(PersonList);