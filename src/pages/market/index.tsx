import { useAuth } from "../../context/authcontext";

const Market = () => {
    const { login, logout } = useAuth();

    return <>
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
    </>
}

export default Market;