import { Link } from 'react-router-dom';
import './styles.css'

const Header = () => {

    return <>
        <div className="header-container">
            <ul>
                <li><Link to={"/"}></Link></li>
                <li><Link to={"/item"}></Link></li>
                <li><Link to={"/market"}></Link></li>
            </ul>
        </div>
    </>
}

export default Header;