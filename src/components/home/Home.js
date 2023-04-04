
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import './Home.css'

function Home(props) {
    const data = props.data;
    return (
        <div >
            <Navbar />
            <Header />
            <div id="card-container">
            {
                data.map(Element => {
                    return (
                        <div >
                         <Link id="link" to={`/city/${Element.id}`}>
                         <Tours key={Element.id}   name={Element.name}  image={Element.image} />
                         </Link>
                        </div>
                    )
                })
            }
            </div>
            <Footer />
        </div>
    )
};

export default Home;