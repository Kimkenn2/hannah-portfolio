import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseArt from './Components/BrowseArt';
import HomePage from './Components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
