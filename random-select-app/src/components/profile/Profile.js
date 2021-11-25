import React from "react";
import './Profile.css'

function Profile(props) {
  const { name, age, country, skills, imageUrl } = props.person;
  
  return (
    <>
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>

      <p>Age: <i className="dim">{age}</i></p>
      <p>Country: <i className="dim">{country}</i></p>
      <p>Skills:</p>

      <ul>
        {skills.map((skill, index) => {
          return (
            <div key={index}>
              <li><i className="dim">{skill}</i></li>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Profile;