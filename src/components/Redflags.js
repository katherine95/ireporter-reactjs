import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import "../App.css";

const token = localStorage.getItem("token");

export default class Redflags extends Component {
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
        console.log(redflags[0]);
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
          viewRedflag.innerHTML = `<a href="/">View</a>`;
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
          <tbody>
          </tbody>
        </Table>
      </div>
    )
  }
}