import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isAuthed, setIsAuthed }) {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
          </li>

          <li>
            <Link to="/profile" style={{textDecoration: 'none'}}>Profile</Link>
          </li>

          <li>
            <Link to="/friends" style={{textDecoration: 'none'}}>Friends</Link>
          </li>
        </ul>

        {
          (isAuthed) 
            ? <span onClick={() => { setIsAuthed(false); navigate('/'); }}>Logout</span>
            : <span><Link to="/login" style={{textDecoration: 'none'}}>Login</Link></span>
        }
      </nav>
    </header>
  );
}

export default Header;