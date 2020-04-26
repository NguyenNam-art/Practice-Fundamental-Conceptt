import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Left from "./Component/Left";
import Tasklist from "./Component/Tasklist";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // id : unique , name , status
      isActive: true,
      modal : true,
      modalImport : true,
      modalExport : true,
      modalPrint : true,
      modalLabel : true
    };
  }
  UNSAFE_componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }
  onSetState = () => {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false,
      });
    } else {
      this.setState({
        isActive: true,
      });
    }
  };
  render() {
    var { tasks, isActive } = this.state;
    var elmActive = isActive ? <Left /> : "";
    return (
      <div className="bg-light">
        <Navbar onSetState={this.onSetState} />
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
            <Tasklist tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
