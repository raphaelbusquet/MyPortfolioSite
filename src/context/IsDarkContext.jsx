// Create context
import { createContext, useState } from "react";


export const IsDarkContext = createContext();

// Create provider instance
export const IsDarkContextProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <IsDarkContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </IsDarkContext.Provider>
    )
}


