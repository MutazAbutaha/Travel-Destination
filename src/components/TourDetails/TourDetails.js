import Header from "../header/Header";
import Footer from "../footer/Footer";
import NavBar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./TourDetails.css";

export default function TourDetails(props) {
  const [isShown, setShown] = useState(false);

  function clickhandle() {
    setShown(!isShown);
  }

  let { id } = useParams();
  let dataTour = props.data.filter((element) => element.id === id);

  return (
    <>
      <NavBar />
      <Header />
      <div id="tour">
        <h2> {dataTour[0].name} </h2>
        <img src={dataTour[0].image} />
        <p>
          {isShown ? dataTour[0].info : `${dataTour[0].info.substring(0, 250)}`}
          {isShown ? (
            <button onClick={clickhandle}>see less</button>
          ) : (
            <button onClick={clickhandle}>see more</button>
          )}
        </p>
      </div>
      <Footer />
    </>
  );
}
