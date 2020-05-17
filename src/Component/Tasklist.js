import React, { Component } from "react";
import Taskitem from "./Taskitem";
import {connect} from 'react-redux'
import './CpnCss/taskList.css'
import { Button } from "reactstrap";
class Tasklist extends Component {
  render() {
    var { tasks } = this.props;
    var elmtask = tasks.map((task) => {
      return <Taskitem key={task.name} task={task} />;
    });
    return (
      <div >
        {elmtask}
        <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <hr></hr>
                <Button></Button> 
            </div>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    tasks : state.tasks
  };
}
export default connect(mapStatetoProps,null)(Tasklist);
