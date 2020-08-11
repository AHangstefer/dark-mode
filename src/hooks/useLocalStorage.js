import React, {useState} from "react";

export const useLocalStorage = (key, initialValue) =>{

    const {storedValue} = useState(()=> {
        if (window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue);
        return initialValue
    });

}