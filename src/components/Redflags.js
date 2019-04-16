import React, { Component } from "react";
import { Table, Button, Navbar } from "react-bootstrap";
import "../App.css";

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

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
        console.log(data.results);
        const redflags = data.results;
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
          viewRedflag.innerHTML = `<a href='/redflag?recordId=${
            redflag.id
          }'>View</a>`;
        });
      });
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand href="#home"><h1>Redflags</h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <button type="button" className="btn btn-primary">
            + Create Redflag
          </button>
            <Navbar.Text>
              Logged in: <b>{username}</b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
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
      </div>
    );
  }
}
