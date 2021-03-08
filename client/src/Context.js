import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const Provider = ({ children }) => {
    const [user, setUser] = useState({})
    const [page, setPage] = useState("home")

    return (
        <GlobalContext.Provider value={{ user, setUser, page, setPage }}>
            {children}
        </GlobalContext.Provider>
    )

}