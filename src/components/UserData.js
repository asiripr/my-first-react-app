import React from "react";
// UserData component
const UserData = (props) => {
    return (
        <div>
            <h2>{props.userName}</h2>
            <p>{props.userEmail}</p>
        </div>
    );
}; 

export default UserData;