import React, { Component } from "react";
import "./App.css";

import Addtask from './Component/AddTask'
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
      
  //     isActive: true,
  //     modal : true,
  //     modalImport : true,
  //     modalExport : true,
  //     modalPrint : true,
  //     modalLabel : true
  //   };
  // }
  // UNSAFE_componentWillMount() {
  //   if (localStorage && localStorage.getItem("tasks")) {
  //     var tasks = JSON.parse(localStorage.getItem("tasks"));
  //     this.setState({
  //       tasks: tasks,
  //     });
  //   }
  // }
  
  // onSetState = () => {
  //   if (this.state.isActive === true) {
  //     this.setState({
  //       isActive: false,
  //     });
  //   } else {
  //     this.setState({
  //       isActive: true,
  //     });
  //   }
  // };
  // onSubmit = (data) =>{
  //   var {tasks} = this.state;
  //   tasks.push(data);
  //   this.setState({
  //     tasks : tasks
  //   });
  // }
  render() {
    // var { tasks, isActive } = this.state;
    // var elmActive = isActive ? <Left onSubmit={this.onSubmit} /> : "";
    return (
      <div >
        {/* <Navbar onSetState={this.onSetState} />
        <div className="row">
          <div
            className={
              isActive
                ? "col-xs-2 col-sm-2 col-md-2 col-lg-2"
                : "col-xs-0 col-sm-0 col-md-0 col-lg-0"
            }
          >
            {elmActive}
          </div>
          <div
            className={
              isActive
                ? "col-xs-10 col-sm-10 col-md-10 col-lg-10"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <Tasklist  />
          </div>
        </div> */}
        <Addtask />
        {/* <Tasklist/> */}
      </div>
    );
  }
}
export default App;
