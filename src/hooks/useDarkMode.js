import React from "react";
import {useLocalStorage} from "./hooks/useLocalStorage";


const useDarkMode = (initialValues, cb) => {

    const [values, setValues] = useLocalStorage(initialValues);

    //105 in .md


    return(
        <div className = "DarkComp">
            <h2> Hello From Dark Mode Componenet</h2>
        </div>
    );

};

export default useDarkMode;