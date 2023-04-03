import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";


function Home(props) {
    const data = props.data;
    return (
        <div>
            <Header />

            {
                data.map(Element => {
                    return (
                        <Tours name={Element.name} image={Element.image} />
                    )
                })

            }
            <Footer />
        </div>

    )
};

export default Home;