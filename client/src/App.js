import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SetAvatar from './Pages/SetAvatar';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Chat />} />
        <Route path='/register' element={<Register />} />
        <Route path='/setavatar' element={<SetAvatar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
