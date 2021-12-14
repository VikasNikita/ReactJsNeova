import React, { Component } from 'react';
import DepartmentService from './DepartmentService';
// import { HashRouter as Router, Route, hashHistory } from 'react-router-dom'
class ListDepartment extends Component
 {
     constructor(props) {
         super(props);
         this.state={
             DeptList:[],
         }
        //  this.addDepartment=this.addDepartment.bind(this);
     }
    // state ={
    //     DeptList:[],
    // };

    
    componentDidMount (){
        DepartmentService.getDepartment().then((response) => {
            this.setState({DeptList:response.data});
        });
    }

    // addDepartment() {
    //     this.props.history.push('/add-department');
    // }

    render() {
        return (
            <> 
                <h2 className="text-center">Department List</h2>
                <div>
                    <button className="btn btn-primary" >Add Department</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>DepartmentId</th>
                            <th>DepartmentName</th>
                            <th>DepartmentLocation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.DeptList.map(
                            (department,index) => 
                            <tr key={index}>
                                <td>{department.deptId}</td>
                                <td>{department.deptName}</td>
                                <td>{department.deptLocation}</td>
                            </tr>)}
                        
                    </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default ListDepartment;