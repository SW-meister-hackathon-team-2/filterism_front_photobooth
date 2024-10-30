import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScrean from './components/MainScrean/MainScrean.jsx';
import Main from './components/Main/Main.jsx';
import Resultimg from './components/resultimg/Resultimg.jsx';
import FinishImage from './components/FinishImage/FinishImage.jsx';
import Template from './components/Template/Template.jsx';
import SelectTem from './components/SelectTem/SelectTem.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainScrean />} />
        <Route path="/main" element={<Main event={false} />} />
        <Route path="/main/result" element={<Resultimg event={false} />} />
        <Route path="/main/event" element={<Main event={true} />} />
        <Route path="/main/frame" element={<Main frame1={true} />} />

        <Route path="/main/event/result" element={<Resultimg event={true} />} />
        <Route path="/main/remove/result" element={<Resultimg remove={true} />} />
        <Route path="/main/frame/result" element={<Resultimg frame1={true} />} />

        <Route path="/main/last" element={<FinishImage event={false} />} />

        <Route path="/main/event/last" element={<FinishImage event={true} />} />
        <Route path="/main/template/filter" element={<Main remove={'filter'} />} />
        <Route path="/main/template/guide" element={<Main remove={'guide'} />} />
        <Route path="/template" element={<SelectTem />} />
        <Route path="/remove" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
