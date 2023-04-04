import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar"
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
                        <Tours  name={Element.name} key={Element.id} image={Element.image} />
                    )
                })
            }
            </div>
            <Footer />
        </div>
    )
};

export default Home;