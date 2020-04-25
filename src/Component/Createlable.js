import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "reactstrap"
class CreateLabel extends Component{
    render() {
        var {task} = this.props;

        return (
            <span className="ml-2 mr-6">{task.label}</span>
      );
    }
}
export default CreateLabel;


