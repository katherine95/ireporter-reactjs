import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

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
  constructor() {
    super();
    this.setState = {
      title: "",
      comment: ""
    };
    //     Image: []
    // Video: null
    // comment: "redflag20"
    // createdBy: "adminwzswsw"
    // createdOn: "2019-04-15T18:58:03.017872Z"
    // facebook: "http://www.facebook.com/sharer.php?u=https://ireporter-drf-api-staging.herokuapp.com/api/redflags/50/&quote=Checkout this red-flag"
    // id: 50
    // incident_type: "red-flag"
    // linkedIn: "http://www.linkedin.com/shareArticle?url=https://ireporter-drf-api-staging.herokuapp.com/api/redflags/50/&title=Checkout this red-flag"
    // location: "45, 50"
    // mail: "mailto:?subject=Checkout this red-flag read&body=https://ireporter-drf-api-staging.herokuapp.com/api/redflags/50/"
    // status: "draft"
    // title: "redflag2"
    // twitter: "https://twitter.com/share?url=https://ireporter-drf-api-staging.herokuapp.com/api/redflags/50/&amp;text=Checkout this red-flag"
    // url: "https://ireporter-drf-api-staging.herokuapp.com/api/redf
  }
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
        console.log(data.data.title);
        console.log(redflagId);
        // const incidentType = document.getElementById("incident_type");
        // const title = document.getElementById("title")
        // const comment = document.getElementById("comment");
        // const location = document.getElementById("location");
        // const createdOn = document.getElementById("createdOn");
        // const image = document.getElementById("image");
        // const status = document.getElementById("status");
        // // const editRecord = document.getElementById("edit");

        // incidentType.innerHTML = data.data.incident_type;
        // title.innerHTML = data.data.title;
        // comment.innerHTML = data.data.comment;
        // location.innerHTML = data.data.location;
        // createdOn.innerHTML = data.data.createdOn;
        // image.innerHTML = data.data.image[0];
        // status.innerHTML = data.data.status;
      });
  }

  render() {
    return (
      <div>
        <h1>View A single Redflag</h1>
        <Card style={{ width: "38rem", height:"40rem", margin: "3rem"}}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
            <Card.Title id="title" ></Card.Title>
            <Card.Text id = "comment">
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
// export default ViewRedflag;
