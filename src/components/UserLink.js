import React from "react";

// another user componet
const UserLink = (props) => {
    return(
      <div>
        <a href={props.link} target='_blank'>{props.label}</a>
      </div>
    );
  }