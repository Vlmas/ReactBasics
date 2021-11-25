import { useState, useEffect } from 'react';
import { profile } from '../../fake-data';
import './Profile.css';

function Profile() {
  const [myProfile, setMyProfile] = useState({
    id: 0,
    name: '',
    age: 0,
    country: 'South Africa',
    imageUrl: '',
  });

  useEffect(() => {
    setMyProfile(profile);
  }, []);

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      
      <div className="user-profile">
        <img width="200" alt="" src="https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1202490554?k=20&m=1202490554&s=612x612&w=0&h=Pkb9bPY7CT5whOt0yZDzGivGBs_CW2fAs0btjFaHCOg=" />
        <h4>{myProfile.name}</h4>
        <p>{myProfile.age} years old</p>
        <p>From <strong>{myProfile.country}</strong></p>
      </div>
    </div>
  );
}

export default Profile;