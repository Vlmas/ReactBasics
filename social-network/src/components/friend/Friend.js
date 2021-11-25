import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { obtainFriend } from "../../fake-data";
import './Friend.css';

function Friend() {
  const params = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    let friend = obtainFriend(params.friendName);
    setFriend(friend);
  }, [params.friendName]);

  return (
    <div className="friend-profile">
      <img width="200" alt="" src={friend.imageUrl} />
      <h4>{friend.name}</h4>
      <p>{friend.age} years old</p>
      <p>From <strong>{friend.country}</strong></p>
    </div>
  );
}
  
export default Friend;