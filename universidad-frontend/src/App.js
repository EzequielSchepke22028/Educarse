// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Materias from './Materias';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/materias" element={<Materias />} />

      </Routes>
    </Router>
  );
}

export default App;
