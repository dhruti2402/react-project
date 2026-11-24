import React from 'react'
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {

        const savedValue = localStorage.getItem(key);
        
        return savedValue !== null 
               ? JSON.parse (savedValue)
               : initialValue
    })

    const updatedValue = (newValue) => {

        setValue(newValue);

        localStorage.setItem(key , JSON.stringify(newValue))
    } 
  return [value, updatedValue]
}

export default useLocalStorage