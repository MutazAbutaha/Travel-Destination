import Home from "./components/home/Home";
const dataJson = require("./data/db.json");
function App() {
  return (
    <div>
      <Home data={dataJson}/>

    </div>
  );
}

export default App;
