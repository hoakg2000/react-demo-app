import { NavLink } from "react-router-dom";

type NavLinkProps = {
    name: string
    link: string
}

const MyNavLink = ({name, link}: NavLinkProps) =>{
    return <NavLink key = {name}
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
        style={({ isActive, isPending }) => {
            return {
                color: isActive ? "red" : "inherit",
            };
        }}
        to={link} >
            {name}
    </NavLink>   
}

export default MyNavLink;