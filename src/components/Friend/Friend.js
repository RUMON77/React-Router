import React from 'react';
import {
   Link, useHistory
  
  } from "react-router-dom";

const Friend = (props) => {
    const history = useHistory();
    const handleClick = (fid) => {
        const url = `/friend/${fid}`;
        history.push(url); 
    }
    const {id, email, name } = props.friend;
    const userStyle = {
        border: '2px solid red',
        margin: '20px',
        padding: '10px',
       borderRadius: '10px'
        
    };

    return (
        <div style={userStyle}>
            <h2>Name : {name}</h2>
            <h4>Title : {email}</h4>
            <p>ID : <Link to={`/friend/${id}`}>
                <button onClick={() => handleClick(id)}>Click Me</button>
            </Link></p>


        </div>
    );
};

export default Friend;