import React, { Component } from "react";
import { connect } from "react-redux";

class PersonList extends Component {
  state = {
    selectedObject: null,
  };
  onDeleteClickHandler = (payload) => {};
  onResetClickHandler = () => {
    this.setState({ selectedObject: null });
  };
  onEditClickHandler = (person) => {
    console.log("Edit", person);
    this.setState({ selectedObject: person });
  };
  onValueChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({
      selectedObject: { ...this.state.selectedObject, [name]: value },
    });
  };
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
            {this.props.PersonList.map((person, index) => {
              return (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="name"
                        value={this.state.selectedObject.name}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.name
                    )}
                  </td>
                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="age"
                        value={this.state.selectedObject.age}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.age
                    )}
                  </td>
                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.updatePerson({
                              ...this.state.selectedObject,
                            });
                            this.onResetClickHandler();
                          }}
                        >
                          {" "}
                          Update
                        </button>
                        &nbsp; &nbsp;
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.onResetClickHandler();
                          }}
                        >
                          Reset
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.deletePersonbyIndex(index);
                          }}
                        >
                          {" "}
                          Delete
                        </button>
                        &nbsp; &nbsp;
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.onEditClickHandler(person);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}

                    {/* <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.deletePersonbyIndex(index);
                      }}
                    >
                      Delete
                    </button> */}
                    {/* &nbsp; &nbsp;
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.onEditClickHandler(person);
                      }}
                    >
                      Edit
                    </button> */}
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
    PersonList: state.personList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePersonbyIndex: (index) =>
      dispatch({ type: "PERSON_DELETE", payload: index }),
    updatePerson: (person) =>
      dispatch({ type: "PERSON_UPDATE", payload: person }),
  };
};
export default connect(mapStateStateToProps, mapDispatchToProps)(PersonList);
