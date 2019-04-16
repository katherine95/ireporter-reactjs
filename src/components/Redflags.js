import React, { Component } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import "../App.css";

const token = localStorage.getItem("token");

export default class Redflags extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
   // window.alert('test');
  }

  componentDidMount() {
    fetch("https://ireporter-drf-api-staging.herokuapp.com/api/redflags/", {
      headers: {
        Accept: "Application/json",
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data.results[0].id);
        const redflags = data.results;
        // console.log(redflags[0]);
        const table = document.getElementById("redflags");
        redflags.map(redflag => {
          const new_row = table.insertRow();
          const id = new_row.insertCell(0);
          const title = new_row.insertCell(1);
          const createdBy = new_row.insertCell(2);
          const status = new_row.insertCell(3);
          const createdOn = new_row.insertCell(4);
          const viewRedflag = new_row.insertCell(5);

          id.innerHTML = redflags.indexOf(redflag) + 1;
          title.innerHTML = redflag.title;
          createdBy.innerHTML = redflag.createdBy;
          status.innerHTML = redflag.status;
          createdOn.innerHTML = redflag.createdOn;
        //   viewRedflag.innerHTML = document.getElementById('viewrecord');
        //   let viewRedflag = document.getElementById("viewrecord").innerHTML
        //   viewRedflag.innerHTML = `<Button variant="primary" onClick=${this.handleShow()}>View</Button>`;
          
            viewRedflag.innerHTML = `<a href='/redflag?recordId=${redflag.id}'>View</a>`;
          //   `<a href='/redflagrecordId=${redflag.id}'>View</a>`;
          //   this.setState({
          //       redflagId : redflag.id
          //   })
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Redflags</h1>
        <Table id="redflags" striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Posted By</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody />
        </Table>
        <Button variant="primary" onClick={this.handleShow} id="viewrecord">
          View
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Update
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
