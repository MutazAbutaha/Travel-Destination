import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
    return (
        <div id="nav">
            <nav >
                <Link id="home" to="/">Home</Link>
            </nav>
        </div>
    )
}

export default NavBar;