import { createContext } from "react";

const Context = createContext({
    currentUser: null,
    token: null,
});

export const ContextProvider = ({ children }) => {
    return (
        <StateContext.Provider >
            
        </StateContext.Provider>
    )
}
