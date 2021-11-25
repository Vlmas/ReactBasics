import React from "react";

function Album(props) {
  const { userId, id, title } = props.album;

  return (
    <div>
      {id}
    </div>
  );
}

export default Album;