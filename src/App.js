import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails";
const dataJson = require("./data/db.json");



function App() {
  return (
    <Routes>
        <Route path="/" element={<Home data={dataJson}/>} />
        <Route path="/city/:id" element={<TourDetails data={dataJson}/>}/> 
    </Routes>
  );
}

export default App;
