import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, getFirebase } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
class ProjectDetails extends Component {
  handleClick = () => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("projects")
      .doc(this.props.match.params.id)
      .delete()
      .then(() => {
        alert("This Project is Deleted!");

        this.props.history.push("/");
        this.props.history.go(0);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };
  render() {
    const { project, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action gret grey-text lighten-4">
              <div>
                Posted By {project.authorFirstName} {project.authorLastName}
              </div>
              <div>
                {project.createdAt
                  ? moment(project.createdAt.toDate()).calendar()
                  : "3rd May, 2020"}
              </div>
              <div className="input-field">
                <button
                  className="btn red lighten-1"
                  onClick={this.handleClick}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
