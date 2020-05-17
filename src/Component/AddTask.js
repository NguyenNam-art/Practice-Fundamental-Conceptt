import React, { Component } from "react";
import './CpnCss/addTask.css'
import Tasklist from './Tasklist'
import {
    Input
  } from "reactstrap";
import {connect} from 'react-redux'
import * as actions from './../Actions/index'
class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // id : '',
          // phone : '',
          // mail : '',
          name : ''
        };
      }
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state)
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
          [name]: value,
        });
      };
  render() {
    return (
      <div className="bg-white">
        <h1>TODOS</h1>
        <form onSubmit={this.onHandleSubmit}>
          <Input className="todo" name="name" value={this.state.name} onChange={this.onChange} type="text" placeholder="What need to be dones" />
          {/* <Button type="submit" name="submit">Add</Button> */}
          <Tasklist/>
        </form>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {

  };
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddTask : (task) =>{
            dispatch(actions.addTask(task));

        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(AddTask);
