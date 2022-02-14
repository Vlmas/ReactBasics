import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import './User.css';

function User() {
  const params = useParams();
  
  return (
    <div className="user">
      <h2 className="user-heading">User with ID of {params.userId}</h2>
    </div>
  );
}

export default User;