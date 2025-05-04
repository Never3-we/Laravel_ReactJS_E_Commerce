import { createContext, useContext, useState } from "react";

const Context = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const setToken =(token) => {
        _setToken(token);
        if(token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }

    return (
        <Context.Provider value={{
            user,
            token,
            setUser,
            setToken
        }} >
            {children}
        </Context.Provider>
    )
}

export const userStateContext = () => useContext(Context);