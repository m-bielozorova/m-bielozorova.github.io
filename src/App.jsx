import './App.css';

import MainLayout from './components/MainLayout';
import ResumeLayout from './components/ResumeLayout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/my-resume" element={<ResumeLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
