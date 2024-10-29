import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import Nomal from './components/Nomal/Nomal.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Nomal" element={<Nomal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
