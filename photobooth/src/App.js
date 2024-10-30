import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScrean from './components/MainScrean/MainScrean.jsx';
import Main from './components/Main/Main.jsx';
import Resultimg from './components/resultimg/Resultimg.jsx';
import FinishImage from './components/FinishImage/FinishImage.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainScrean />} />
        <Route path="/main" element={<Main event={false} />} />
        <Route path="/main/result" element={<Resultimg event={false} />} />
        <Route path="/main/event" element={<Main event={true} />} />
        <Route path="/main/event/result" element={<Resultimg event={true} />} />
        <Route path="/main/last" element={<FinishImage event={false} />} />
        <Route path="/main/event/last" element={<FinishImage event={true} />} />
      </Routes>
    </div>
  );
}

export default App;
