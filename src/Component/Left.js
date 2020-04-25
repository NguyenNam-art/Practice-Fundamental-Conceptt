import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CpnCss/Left.css";

import {
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import {
  faUser,
  faPlus,
  faHistory,
  faClipboard,
  faChevronCircleUp,
  faUpload,
  faDownload,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

class Left extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      label : []
    }
  }
  UNSAFE_componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }
  OngenerateData = () => {
    var tasks = [
      {
        id: this.gerenateId(),
        name: "Phan Hoàng Long",
        phone: "01223554658",
        mail: "Hoanglong@gmail.com",
      },
      {
        id: this.gerenateId(),
        name: "Nguyên Đôn Kim Trung",
        phone: "01223554658",
        mail: "KimTrung@gmail.com",
      },
      {
        id: this.gerenateId(),
        name: "Châu Nguyên Nam",
        phone: "0386345751",
        mail: "Chaunguyennam@gmail.com",
      },
    ];
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  onsetModal = () => {
    this.props.onsetModal();
  };
  gerenateId() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4()
    );
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  toggle2 = () => {
    this.setState({
      modalImport: !this.state.modalImport,
    });
  };
  toggleExport = () => {
    this.setState({
      modalExport: !this.state.modalExport,
    });
  };
  togglePrint = () => {
    this.setState({
      modalPrint: !this.state.modalPrint,
    });
  };
  toggleCreateLabel = () => {
    this.setState({
      modalLabel: !this.state.modalLabel,
    });
  };
  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
  }
  addlabel = () =>{
    var label = [

    ]
  }
  onSubmit = (event) =>{
    var {label} = this.state.label;
    event.preventDefault();
    label.push(this.state.name)
    this.setState({
      label : label
    });
  }
  render() {
    // let label = this.state.name;
    // let result;
    // if(label){
    //   result = <button color="white" className="d-block">
    //             <div className="button-left">
    //               <span className="">
    //                 <FontAwesomeIcon icon={faHistory} />
    //               </span>
    //               <span className="ml-2">{label}</span>
    //             </div>
    //           </button>

    // }
    var label = this.state.label;
    return (
      <div className="bg-light">
        <div>
          <button
            type="button"
            className="btn btn-round btn-light "
            onClick={this.toggle}
          >
            <span>
              {" "}
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>Create Contact</span>
          </button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.className}
          >
            <ModalHeader toggle={this.toggle}>
              Tạo Địa Chỉ Liên Hệ Mới
            </ModalHeader>
            <ModalBody>
              <Input type="text" placeholder="Họ Và Tên" />
              <Input className="mt-2" type="text" placeholder="Công Ty" />
              <Input
                className="mt-2"
                type="email"
                name="email"
                placeholder="Email"
              />
              <Input className="mt-2" type="text" placeholder="Số Điện Thoại" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Hủy
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Lưu
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <hr></hr>
        <div className="left">
          <button color="white" className="d-block">
            <div className="button-left">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="ml-2 mr-6">Contact</span>
            </div>
          </button>
          <button color="white" className="d-block">
            <div className="button-left">
              <span className="">
                <FontAwesomeIcon icon={faHistory} />
              </span>
              <span className="ml-2">Frequently contact</span>
            </div>
          </button>
          <button color="white" className="d-block">
            <div className="button-left">
              <span>
                <FontAwesomeIcon icon={faClipboard} />
              </span>
              <span className="mr-4 ml-2">Merger and Fix</span>
            </div>
          </button>
          <button color="white" className="d-block">
            <div className="button-left">
              <span>
                <FontAwesomeIcon icon={faChevronCircleUp} />
              </span>
              <span className="ml-2 mr-7">Labels</span>
            </div>
          </button>
          <div>
            <button
              color="white"
              className="d-block"
              onClick={this.toggleCreateLabel}
            >
              <div className="button-left">
                <span className="pr-2">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="mr-create">Create Label</span>
              </div>
            </button>
            <Modal
              
              isOpen={this.state.modalLabel}
              toggle={this.toggleCreateLabel}
              className={this.className}
            >
              <ModalHeader>Tạo Nhãn</ModalHeader>
              <form onSubmit={this.onSubmit}>
              <ModalBody>
                <Input
                  name = "name"
                  type="text" value={this.state.name} onChange={this.onChange}></Input>
              </ModalBody>
              {/* <select
                className="form-control"
                name = "status"
                value = {this.state.status}
                onChange = {this.onChange}
              ></select> */}
              <ModalFooter>
                <Button type="button" color="primary" onClick={this.toggleCreateLabel}>
                  Hủy
                </Button>{" "}
                <Button  type="submit"  color="secondary" onClick={this.toggleCreateLabel}>
                  Lưu
                </Button>
              </ModalFooter>
              </form>
            </Modal>
          </div>
          <div>
             {label}
          </div>
          <div>
            <button color="white" className="d-block" onClick={this.toggle2}>
              <div className="button-left">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faUpload} />
                </span>
                <span className="ml-1 mr-6">Import</span>
              </div>
            </button>
            <Modal
              isOpen={this.state.modalImport}
              toggle={this.toggle2}
              className={this.className}
            >
              <ModalHeader toggle={this.toggle2}>Nhập Danh Bạ</ModalHeader>
              <ModalBody>
                <p>
                  Để nhập liên hệ, hãy chọn một tệp CSV hoặc vCard. Tìm hiểu
                  thêm
                </p>
                <Input type="file" name="file" id="exampleFile" />
                <p>
                  Bạn không có tệp CSV hoặc vCard? Hãy tạo nhiều địa chỉ liên
                  hệ.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle2}>
                  Hủy
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle2}>
                  Nhập
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <div>
            <button
              color="white"
              className="d-block"
              onClick={this.toggleExport}
            >
              <div className="button-left">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faDownload} />
                </span>
                <span className="ml-1 mr-6">Export</span>
              </div>
            </button>
            <Modal
              isOpen={this.state.modalExport}
              toggle={this.toggleExport}
              className={this.className}
            >
              <ModalHeader toggle={this.toggleExport}>Xuất Liên Hệ</ModalHeader>
              <ModalBody>
                <FormGroup tag="fieldset">
                  <legend>Xuất Dưới Dạng</legend>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> CSV cho Google
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> CSV cho Facebook
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input type="radio" name="radio1" /> vCard (dành cho Danh
                      bạ iOS)
                    </Label>
                  </FormGroup>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleExport}>
                  Hủy
                </Button>{" "}
                <Button color="secondary" onClick={this.toggleExport}>
                  Xuất
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <div>
            <button
              color="white"
              className="d-block"
              onClick={this.togglePrint}
            >
              <div className="button-left">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faPrint} />
                </span>
                <span className="ml-1 mr-7">Print</span>
              </div>
            </button>
            <Modal
              isOpen={this.state.modalPrint}
              className={this.className}
              toggle={this.togglePrint}
            >
              <ModalHeader toggle={this.togglePrint}>In Liên Hệ</ModalHeader>
              <ModalBody>
                <FormGroup tag="fieldset">
                  <legend>Xuất Dưới Dạng</legend>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />
                      Thường Xuyên Liên Hệ
                    </Label>
                  </FormGroup>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.togglePrint}>
                  Hủy
                </Button>{" "}
                <Button color="secondary" onClick={this.togglePrint}>
                  In
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <button color="white" className="d-block">
            <div className="button-left">
              <span className="mr-1">
                <FontAwesomeIcon icon={faClipboard} />
              </span>
              <span className="ml-2">Another Contact</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
export default Left;
