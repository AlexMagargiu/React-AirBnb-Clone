import logo from "../src/airbnb-logo.png"

function Navbar(){
    return(
        <nav className="nav">
            <img src={logo} alt="AirBnb Logo" className="logo"></img>
        </nav>
    )
}

export default Navbar;