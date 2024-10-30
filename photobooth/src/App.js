import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScrean from './components/MainScrean/MainScrean.jsx';
import Main from './components/Main/Main.jsx';
import Result from './components/result/Result.jsx';
import Resultimg from './components/resultimg/Resultimg.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainScrean />} />
        <Route path="/main" element={<Main event={false} />} />
        <Route path="/main/event" element={<Main event={true} />} />
        <Route path="/" element={<Main />}></Route>
        <Route path="/main/result" element={<Resultimg event={false} />} />
        <Route path="/main/event/result" element={<Resultimg event={true} />} />
      </Routes>
    </div>
  );
}

export default App;
