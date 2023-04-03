import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
const dataJson = require("../../data/db.json");

function Home(){
    return(
        <>
        <Header/>
        <>
        {
            dataJson.map(Element=>{
                return(
                    <Tours name={Element.name} image={Element.image}/>
                )
            }) 

        }
        </>
        <Footer/>
        </>

    )
};

export default Home;