import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseForm extends Component
 {
     state = {
         name:" ",
         fees:0,
     };

     onValueChangeHandler = (event) =>{
         const{name,value} =event.target;
         this.setState({[name]:value});
     };
     onFormSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(this.state);
        this.props.addCourse(this.state);
     };
    render() {
        return (
            <>
              <h1>Course Form</h1>
              <form onSubmit={this.onFormSubmitHandler}>

                  <div className="mb-3">
                  <label className="form-label">CourseName:</label>
                  <input 
                  className="form-control" 
                  name={"name"}
                  value={this.state.name} 
                  onChange={this.onValueChangeHandler}/>
                  </div>
                  <br/>
                  <br/>

                  <div className="mb-3">

                  <label className="form-label">CourseFees</label>
                  <input 
                  className="form-control" 
                  name={"fees"} 
                  value={this.state.fees}
                  onChange={this.onValueChangeHandler}/>
                  <br/>
                  <br/>
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
              </form>
             
            </>
        );
    }
}
const mapStateStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (payload) => dispatch({type : "COURSE_ADD",payload:payload}),
    };
};
export default connect(mapStateStateToProps,mapDispatchToProps)(CourseForm);