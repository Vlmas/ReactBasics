import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main'
import User from './components/user/User';

function App() {
  return (
    <main className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </main>
  );
}

export default App;