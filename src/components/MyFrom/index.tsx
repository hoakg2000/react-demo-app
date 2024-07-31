import { CSSProperties, ReactNode } from "react"

type MyFormProps = {
    children:ReactNode;
    style?: CSSProperties;
}

const MyForm = ({children, style}: MyFormProps) =>{

    return <>
    <div style={ style ? style : {
        width: "70%",
        margin: "auto",
        marginTop: "5px"
    }}>
        {children}
    </div>
    </>
}

export default MyForm;