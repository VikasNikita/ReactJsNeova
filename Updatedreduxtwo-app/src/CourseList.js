import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseList extends Component {
    render() {
        return (
            <>
              <h1>CourseList</h1>  
              <table className={"table"}>
                  <thead>
                      <tr>
                            <th>Name</th>
                            <th>Fees</th>
                            <th>Option</th>

                      </tr>
                  </thead>
                  <tbody>
                      {this.props.CourseList.map((course,index)=> {
                          return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{course.name}</td>
                                    <td>{course.fees}</td>
                                    <td>
                                     <button className="btn btn-danger" onClick={()=> {
                                         this.props.deleteCoursebyIndex(index)}}>Delete</button>
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
        CourseList:  state.courseList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deleteCoursebyIndex: (index) => dispatch ({type :"COURSE_DELETE",payload:index}),
    };
};
export default connect(mapStateStateToProps,mapDispatchToProps)(CourseList);