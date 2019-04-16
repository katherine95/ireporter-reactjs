import React, { Component } from "react";

const token = localStorage.getItem("token");
const url = new URL(window.location.href);
console.log(url.href);
let urlArray = url.href.split("");
let count = 0;
for (let char_ of urlArray) {
  if (char_ == "=") {
    break;
  }
  count += 1;
}
let redflagId = url.href.substring(count + 1);
console.log(redflagId);

export default class ViewRedflag extends Component {

  componentDidMount() {
    fetch(
      `https://ireporter-drf-api-staging.herokuapp.com/api/redflags/${redflagId}/`,
      {
        headers: {
          Accept: "Application/json",
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        console.log(data.data.createdBy);
        localStorage.setItem("username", data.data.createdBy);
        console.log(redflagId);
        const incidentType = document.getElementById("type");
        const title = document.getElementById("title");
        const comment = document.getElementById("comment");
        const location = document.getElementById("location");
        const status = document.getElementById("status");
        // const editRecord = document.getElementById("edit");

        incidentType.innerHTML = data.data.incident_type;
        title.innerHTML = data.data.title;
        comment.innerHTML = data.data.comment;
        location.innerHTML = data.data.location;
        status.innerHTML = data.data.status;
      });
  }

  render() {
    return (
      <div>
        <h1 id="title"></h1>
            IncidentType: <b id="type"></b>      Status: <b id="status"></b>
            <h4>Description :</h4>
            <div id="comment"></div>
            <h3>Location: </h3><div id="location"></div>
            <button id="edit">Edit</button><button id="delete">Delete</button>
      </div>
    );
  }
}
// export default ViewRedflag;
