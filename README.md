# steps to do React Routing
1. install react router : npm install react-router@6 react-router-dom@6

2. inside index.js:

3. import { BrowserRouter } from "react-router-dom";

    <BrowserRouter>
    <App />
    </BrowserRouter>
4. In src/App.js:

5. import { Routes, Route } from "react-router-dom";
        // inside return:
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/> }/>
     </Routes>
6. Adding a Navbar:
7. import { Link } from "react-router-dom";

8.  function NavBar() {
    return (
        <>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <nav>
                <Link to="/"> Home</Link>
            </nav>
            <nav>
                <Link to="/contact"> Contact Us</Link>
            </nav>
        </>
    )
}
 
 export defult Navbar;