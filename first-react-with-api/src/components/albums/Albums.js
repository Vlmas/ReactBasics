import React, { useEffect, useState } from "react";
import axios from "axios";
import Album from "../album/Album";
import './Albums.css';

export default function Albums() {
  const url = 'https://jsonplaceholder.typicode.com';
  const [albums, setAlbums] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    getAlbums();
  }, []);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const getAlbums = async () => {
    // fetch(`${url}/albums`)
    //   .then((rawData) => rawData.json())
    //   .then((data) => setAlbums(data));
    axios.get(`${url}/albums`)
      .then((response) => {
        console.log(response);
        setAlbums(response.data);
      });
  };

  const sendPost = async () => {
    let response = await axios.post(`${url}/albums`, { userId: 123, id: 123, title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' });
    console.log(response);
  };

  return (
    <div className="albums-container">
      <div className="albums-header">
        <h2>Albums</h2>

        <div className="add-album">
          <input type="text" name="add" placeholder="Enter album content" value={inputText} onChange={handleInput} />
          <img onClick={sendPost} width="36" src="https://cdn2.iconfinder.com/data/icons/top-search/128/_add_plus_round_action_button_new_more-128.png" alt="" />
        </div>
      </div>

      {albums.map((album) => {
        return (
          <Album key={album.id} album={album} />
        );
      })}
    </div>
  );
}