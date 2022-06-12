import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseArt from './Components/BrowseArt';
import HomePage from './Components/HomePage';
import PortfolioPage from "./Components/PortfolioPage";
import ArtCard from "./Components/ArtCard";
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/browseArt" element={<BrowseArt />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
