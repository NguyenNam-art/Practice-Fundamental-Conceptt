import React, { Component } from "react";
import "./CpnCss/Navbar.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faQuestionCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
class Navbar extends Component {
  onSetState = () => {
    this.props.onSetState();
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div>
            <button
              onClick={this.onSetState}
              className="navbar-brand btn btn-link"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <a className="navbar-brand" href="!#">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a className="navbar-brand" href="!#">
              Contact
            </a>
          </div>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <Form className="form-inline my-2 my-lg-0">
              <input
                className="Search"
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Search"
              />
            </Form>
          </div>
          <form className="form-inline my-2 my-lg-0  ">
            <UncontrolledDropdown className="mr-3">
              <DropdownToggle>
                {" "}
                <FontAwesomeIcon icon={faQuestionCircle} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Send Feedback</DropdownItem>
                <DropdownItem>Help</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="mr-3">
              <DropdownToggle>
                {" "}
                <FontAwesomeIcon icon={faCog} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Cancel all changes</DropdownItem>
                <DropdownItem>Another Setting</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="mr-3">
              <DropdownToggle>
                {" "}
                <FontAwesomeIcon icon={faBars} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Send Feedback</DropdownItem>
                <DropdownItem>Help</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </form>
        </nav>
      </div>
    );
  }
}
export default Navbar;
