import React from "react";

import {useDarkMode} from "../hooks/useDarkMode";

const Toggle = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };
    return (
        <div>
            <button className="button" onClick={toggleMode}>Dark Mode</button>
        </div>
    )
}

export default Toggle;