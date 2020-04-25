import React, { Component } from "react";
import Taskitem from "./Taskitem";
class Main extends Component {
  render() {
    var { tasks } = this.props;
    var elmtask = tasks.map((task) => {
      return <Taskitem key={task.id} task={task} />;
    });
    return (
      <div className="bg-white">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Job title and Company</th>
              <th><svg
               width="20" viewBox="0 0 24 24">
            
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg></th>
            </tr>
          </thead>
          <tbody>
              {elmtask}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Main;
