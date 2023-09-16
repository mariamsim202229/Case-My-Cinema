import { Link } from "react-router-dom";


const Navbar = () => {

    return (
<header className="MyHeader">
        <nav className="navbar">
            <div>
                <h1>Leos Bio</h1>
                <Link to='/'> Hemsida </Link>
                <br></br>
                <Link to='/booking'> Boka film</Link>
            </div>
        </nav>

        </header>

    )
}

export default Navbar;
