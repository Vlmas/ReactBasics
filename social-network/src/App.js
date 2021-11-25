import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Friends from './components/friends/Friends';
import Friend from './components/friend/Friend';
import Login from './components/login/Login';
import { Routes, Route, Navigate } from 'react-router';
import { useState } from 'react';
import './App.css';

function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <main className="app">
      <Header isAuthed={isAuthed} setIsAuthed={setIsAuthed} />

      <Routes>
        <Route path="/" element={<Home isAuthed={isAuthed} setIsAuthed={setIsAuthed} />} />
        
        <Route path="/profile" element={
          <CheckForAuth isAuthed={isAuthed}>
            <Profile />
          </CheckForAuth>
        } />

        <Route path="/friends" element={
          <CheckForAuth isAuthed={isAuthed}>
            <Friends />
          </CheckForAuth>
        }>
          <Route path=":friendName" element={<Friend />} />
        </Route>

        <Route path="/login" element={<Login isAuthed={isAuthed} setIsAuthed={setIsAuthed} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

function CheckForAuth({ isAuthed, children }) {
  return ((isAuthed) ? children : <Navigate to="/login" replace />);
}

export default App;