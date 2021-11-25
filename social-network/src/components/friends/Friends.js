import { friends } from '../../fake-data';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import './Friends.css';

function Friends() {
  const [myFriends, setMyFriends] = useState(friends);

  return (
    <div className="friends-page">
      <h2>
        <Link to="/friends">
          Friends Page
        </Link>
      </h2>

      <div className="friends-list">
        {myFriends.map((friend) => {
          return (
            <p key={friend.id}>
              <Link to={`/friends/${friend.name}`}>{friend.name}</Link>
            </p>
          );
        })}
      </div>

      <Outlet />
    </div>
  );
}

export default Friends;