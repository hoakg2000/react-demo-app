import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
    auth: boolean,
    login: () => void,
    logout: () => void,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<boolean>(false)
    const login = () => { setAuth(true) };
    const logout = () => { setAuth(false) };

    return <>
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    </>

}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context == undefined) {
        throw new Error("error")
    }
    return context;
}