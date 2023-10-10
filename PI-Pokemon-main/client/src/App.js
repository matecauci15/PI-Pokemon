import './App.css';
// import Card from './Components/Card/Card';
import DetailPage from './views/DetailPage/DetailPage';
import Form from './views/Form/Form';
import HomePage from './views/HomePage/homePage';
import LandingPage from './views/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path='/form' element={<Form />} />
          <Route path='detail/:id' element={<DetailPage/>}/>
          {/* <Route path='/card' element={<Card/>}/> */}
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
