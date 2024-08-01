import { Link, NavLink } from "react-router-dom";
import './styles.css'
import MyNavLink from "../../components/MyNavLink";
import { useAuth } from "../../context/authcontext";

const Header = () => {
    const { auth } = useAuth();
    const helloTxt = auth ? <p style={{ color: "white" }}>hello user</p> : null

    return <>
        <nav className="header-container">
            <ul className="header-tab-container">
                <li className="header-tab-item">
                    <MyNavLink name={"relic"} link={"/"} />
                </li>
                <li className="header-tab-item">
                    <MyNavLink name={"redux"} link={"item"} />
                </li>
                <li className="header-tab-item">
                    <MyNavLink name={"context"} link={"market"} />
                </li>
                {helloTxt}
                <button onClick={() => { throw new Error("force error") }}>error</button>
            </ul>
        </nav>
    </>
}

export default Header;