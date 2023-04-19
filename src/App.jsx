import './App.css';
import Questionnaire from './component/questions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayResults from './component/results';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Questionnaire/>} />
      <Route path="/results" element={<DisplayResults/>}/>
      <Route path=""/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
