import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

type LayoutProps = {
    children: ReactNode
}

const Layout = () =>{

    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}

export default Layout;