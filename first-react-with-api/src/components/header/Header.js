import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link className="link-part" to="/">
            <img
              width="23"
              src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_Home-page-Internet-House-128.png"
              style={{marginRight: '4px'}} 
            />
            <p>Home Page</p>
          </Link>
        </li>

        <li>
          <Link className="link-part" to="/about">
            <img 
              width="23"
              src="https://cdn4.iconfinder.com/data/icons/common-toolbar/36/Help-2-128.png"
              style={{marginRight: '4px'}} 
            />
            <p>About</p>
          </Link>
        </li>

        <li>
          <Link className="link-part" to="/albums">
            <img 
              width="23"
              src="https://cdn2.iconfinder.com/data/icons/unigrid-phantom-multimedia-vol-1/60/020_045_image_painting_photo_picture_gallery_album_4-128.png"
              style={{marginRight: '4px'}} 
            />
            <p>Albums</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;