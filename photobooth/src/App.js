import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScrean from './components/MainScrean/MainScrean.jsx';
import Main from './components/main/Main.jsx';
import Result from './components/result/Result.jsx';
import Resultimg from './components/resultimg/Resultimg.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainScrean />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/result" element={<Result />} />

        <Route path="/" element={<Main />}></Route>
        <Route path="/main/result/test" element={<Resultimg />} />
      </Routes>
    </div>
  );
}

export default App;
