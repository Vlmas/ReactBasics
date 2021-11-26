import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

function Login({ isAuthed, setIsAuthed }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [correctUsername, setCorrectUsername] = useState('Almas');
  const [correctPassword, setCorrectPassword] = useState('qwerty');
  const [inputAlert, setInputAlert] = useState(false);

  const handleLogin = () => {
    if(username === correctUsername && password === correctPassword) {
      setIsAuthed(true);
      navigate('/');
    } else {
      setInputAlert(true);
    }
  };

  const handleInput = (e) => {
    switch(e.target.name) {
      case 'username-input':
        setUsername(e.target.value);
        break;
      case 'password-input':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-page">
      <h2>Login Page</h2>

      <div className="form-container">
        <div className="input-fields">
          <div>
            <label htmlFor="username-input">Username</label>
            <input type="text" name="username-input" id="username-input" value={username} onChange={handleInput} />
          </div>
          <p>The correct username is: Almas</p>
        </div>

        <div className="input-fields">
          <div>
            <label htmlFor="password-input">Password</label>
            <input type="password" name="password-input" id="password-input" value={password} onChange={handleInput} />
          </div>
          <p>The correct password is: qwerty</p>
        </div>
      </div>

      <button onClick={handleLogin}>Submit</button>

      {inputAlert && (
        <div className="input-alert">
          <h4>Incorrect username or password. Please, try again</h4>
        </div>
      )}
    </div>
  );
}
  
export default Login;