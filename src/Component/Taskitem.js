import React, { Component } from "react";
import "./CpnCss/Taskitem.css";
import {  Button } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "./../Actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
class Taskitem extends Component {
  ondeleteTask = () => {
    this.props.ondeleteTask(this.props.task.name);
  };
  
  render() {
    var { task } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4" />
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <input value="1" className="mt-3 " type="checkbox"></input>
            <span className="taskname"> {task.name} </span>
          </div>

          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-2">
            <Button onClick={this.ondeleteTask} className="btn btn-danger">
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </div>
        </div>
        
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    //   onUpdateStatus : (name) =>{
    //       dispatch(actions.updateStatus(name));
    //   },
    ondeleteTask: (name) => {
      dispatch(actions.deleteTask(name));
    },
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Taskitem);
