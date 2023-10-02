import './App.css';
import DetailPage from './Components/DetailPage/DetailPage';
import Form from './Components/Form/Form';
import HomePage from './Components/HomePage/homePage';
import LandingPage from './Components/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path='/form' element={<Form />} />
          <Route path='/:name' element={<DetailPage/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
