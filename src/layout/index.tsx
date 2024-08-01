import { ReactNode } from "react";
import Header from "./header";

type LayoutProp = {
    body: ReactNode
}

const Layout = ({ body }: LayoutProp) => {
    return <>
        <Header />
        {body}
    </>
}

export default Layout;