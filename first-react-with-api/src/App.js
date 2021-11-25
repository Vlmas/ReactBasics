import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h2>Welcome to Album Application</h2>
        <p>Click "Albums" to start browsing beautiful albums, and "About" to view some details!</p>

        <div className="home-imgs">
          <img src="https://cdn0.iconfinder.com/data/icons/devices-3-7/30/128-128.png" alt="" />
          <img src="https://cdn0.iconfinder.com/data/icons/music-instrument-vol-1/512/album_cd_vinyl_music-128.png" alt="" />
          <img src="https://cdn1.iconfinder.com/data/icons/love-wedding-vol-2/512/wedding_song_music_album-128.png" alt="" />
          <img src="https://cdn1.iconfinder.com/data/icons/music-instrument-vol-2/512/z6-cd_album_music_disk-128.png" alt="" />
        </div>
      </div>
    );
  }
}

export default App;