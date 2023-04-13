// Refactoring Context

import { useContext } from "react";
import { IsDarkContext } from "../context/IsDarkContext";

export const useIsDarkContext = () => {
    const context = useContext(IsDarkContext)

    if(!context) {
        console.log("Contexto não encontrado")
    }

    return context;
}