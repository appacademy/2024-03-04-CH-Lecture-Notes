import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSessionContext } from "../context/sessionContext";

const NavBar = () => {

    // const [loggedIn, setLogin] = useState(false);
    // const {loggedIn, setLogin} = useContext(SessionContext);
    const {loggedIn, setLogin} = useSessionContext();
    const [currentUser, setCurrentUser] = useState({});

    let buttonText;
    if (loggedIn) {
        buttonText = "Logout";
    }
    else {
        buttonText = "Login";
    }

    const handleClick = () => {
        if (loggedIn) {
            setCurrentUser({});
            setLogin(false);
        } else {
            setCurrentUser({name: "Amin"})
            setLogin(true);
        }
    }


    return (
        <>
            <div className="main-header">
                <Link to="/" className="logo">
                    <p>RIBBIT</p>
                </Link>
                <div>
                    <p>The Front Page of the Swamp</p>
                </div>
                <div className="session-buttons">
                    {currentUser.name && <p>Welcome {currentUser.name}!</p>}
                    <button onClick={handleClick}>{buttonText}</button>

                </div>
            </div>
            <div className="sub-nav-bar">
                <ul className="nav-links">
                    <li><NavLink to='/caecilians'>Caecilians</NavLink></li>
                    <li><NavLink to='/frogs'>Frogs</NavLink></li>
                    <li><NavLink to='/newts'>Newts</NavLink></li>
                    <li><NavLink to='/salamanders'>Salamanders</NavLink></li>
                    <li><NavLink to='/toads'>Toads</NavLink></li>
                </ul>
            </div>
        </>
    )
};

export default NavBar;