import '../styles/app.css'
import {StoreContext} from "../store";
import {useEffect, useLayoutEffect, useState} from "react";

function MyApp({Component, pageProps}) {
    const [theme, setTheme] = useState();

    useLayoutEffect(() => {
        setTheme(localStorage.getItem("THEME") || 'light');
    }, [])


    useEffect(() => {
        const $html = document.querySelector("html")
        $html.classList.remove("light")
        $html.classList.remove("dim")
        $html.classList.remove("dark")
        $html.classList.add(theme);
        localStorage.setItem("THEME", theme);
    }, [theme])


    return (
        <StoreContext.Provider value={{theme, setTheme}}>
            <Component {...pageProps} />
        </StoreContext.Provider>
    )
}

export default MyApp
