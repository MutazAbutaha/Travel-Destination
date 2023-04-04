import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TourDetails(props) {
  const [isShown, setShown] = useState(false);

  function clickhandle() {
    setShown(!isShown);
  }

  let { id } = useParams();
  let infoData = props.data.filter((element) => element.id === id);

  return (
    <>
      <Header />
      <div>
        <h2> {infoData[0].name} </h2>

        <p>
          {isShown ? infoData[0].info : `${infoData[0].info.substring(0, 250)}`}
          {isShown ? (
            <button onClick={clickhandle}>see less</button>
          ) : (
            <button onClick={clickhandle}>see more</button>
          )}
        </p>

        <img src={infoData[0].image} />
      </div>

      <Footer />
    </>
  );
}









// import "./TourDetails.css";


// function TourDetails(props) {
//     console.log(props);
//     const data = props.data;

//     return (

//         <div >
//             {
//                 data.map(Element => {
//                     return (
//                         <>
//                      <h3>{Element.name} </h3>  
//                      <img src={Element.image} alt={Element.name}/>  
//                      <p>{Element.info}</p> 
//                         </>
                     

//                     )
//             })
//             }

//         </div>
//     )
// };

// export default TourDetails;