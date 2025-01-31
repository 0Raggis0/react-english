import { createContext, useContext } from "react";


//* Primero se crea el context con todos los datos que queramos
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

//* Nos aseguramos que todos conozcan el context 
export const ThemeProvider = ThemeContext.Provider;

//* Se crea un hook para que se puda usar directamente con los valores dichos anteriormente
export default function useTheme() {
    return useContext(ThemeContext);
}