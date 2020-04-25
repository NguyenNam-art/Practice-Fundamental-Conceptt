import React, { Component } from 'react';

class Taskitem extends Component{
    render() {
        var {task} = this.props;

        return (
            <tr>
                <td>{task.name}</td>
                <td>{task.mail}</td>
                <td>{task.phone}</td>
                <td>{task.id}</td>
            </tr>
      );
    }
}
export default Taskitem;


