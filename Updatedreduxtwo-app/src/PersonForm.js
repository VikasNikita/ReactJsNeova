import React, { Component } from "react";
import { connect } from "react-redux";
// import PersonList from "./PersonList";

class PersonForm extends Component {
  state = {
    name: " ",
    age: 0,
  };

  onValueChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addPerson(this.state);
  };

  render() {
    return (
      <>
        <h1>Person Form</h1>
        <form onSubmit={this.onFormSubmitHandler}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              className="form-control"
              name={"name"}
              value={this.state.name}
              onChange={this.onValueChangeHandler}
            />
          </div>
          <br />
          <br />

          <div className="mb-3">
            <label className="form-label">Age:</label>
            <input
              className="form-control"
              name={"age"}
              value={this.state.age}
              onChange={this.onValueChangeHandler}
            />
            <br />
            <br />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          {/* <button></button> */}
        </form>
        {/* <personList/> */}
        {/* <PersonList/> */}
      </>
    );
  }
}
const mapStateStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (payload) => dispatch({ type: "PERSON_ADD", payload: payload }),
  };
};
export default connect(mapStateStateToProps, mapDispatchToProps)(PersonForm);
