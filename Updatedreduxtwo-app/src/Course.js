import React, { Component } from 'react';
import CourseList from './CourseList';
import CourseForm from './CourseForm';

export default class Course extends Component {
   
   
    render() {
        return (<>
                <h1>Course Master</h1>
                <br/>

                <div className="row">

                    <div className= "col-md-4">
                    <CourseForm/>
                    </div>
                
                <div className="col-md-8">
                    <CourseList/>
                </div>
                </div>
            </>
        )
    }
}

