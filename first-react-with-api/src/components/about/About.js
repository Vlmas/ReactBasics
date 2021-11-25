import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <ul>
        <li>
          <img width="110" src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" alt="" />
          <h3>Album Application on React.js</h3>
          <p>This project was generated with React.js version 17.0.2</p>
        </li>
        <li>
          <img width="86" src="https://cdn0.iconfinder.com/data/icons/smashicons-file-types-retro/58/25_-_JSON_File_file_document_directory_-128.png" alt="" />
          <h3>JSON Placeholder as a data provider</h3>
          <p>100 albums and 5000 photos</p>
        </li>
        <li>
          <img width="115" src="https://cdn1.iconfinder.com/data/icons/university-7/64/12-research-128.png" alt="" />
          <h3>JSON Placeholder as a knowledge source</h3>
          <p>Very important knowledge in HTTP Client Module and Routing</p>
        </li>
        <li>
          <img width="220" height="115" src="https://maint.kz/assets/img/part/7.png" alt="" />
          <h3>Application revisited and written by 3-year KBTU student</h3>
          <p>Showing basic knowledge in JS Framework React</p>
        </li>
      </ul>
    </div>
  );
}

export default About;