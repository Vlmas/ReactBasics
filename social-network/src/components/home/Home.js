import './Home.css';

function Home({ isAuthed }) {
  return (
    <div className="home-page">
      <h2>Welcome to the Home Page!</h2>
      
      {
        (isAuthed)
          ? (
            <div>
              <h3>You have successfully authed into your account!</h3>
              <h3>Now you can enter your pages</h3>
            </div>
          )
          : (
            <div>
              <h3>You are not authed!</h3>
              <h3>Please log in to the system</h3>
            </div>
          )
      }

      <img src="https://miro.medium.com/max/1103/0*KIKnUvzdIkp5zcDJ" width="450" alt="" />
    </div>
  );
}

export default Home;