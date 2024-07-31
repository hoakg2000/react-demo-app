import { Link, NavLink } from "react-router-dom";
import './styles.css'
import MyNavLink from "../../components/MyNavLink";

const Header = () =>{

    return <>
        <nav className="header-container">
            <ul className="header-tab-container">
                <li className="header-tab-item">
                    <MyNavLink name={"home"} link = {"/"}/>
                </li>
                <li className="header-tab-item">
                    <MyNavLink name={"item"} link = {"item"}/>
                </li>
                <li className="header-tab-item">
                    <MyNavLink name={"market"} link = {"market"}/>
                </li>
            </ul>
        </nav>
    </>
}

export default Header;