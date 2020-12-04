import React, { useState, useEffect } from "react"



export const AnimalContext = React.createContext()

export const AnimalProvider = (props) => {
    const [animal, SetAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
        .then(res => res.json())
        .then(SetAnimals)
    }
        const addAnimals = animals => {
            return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(animals)
            })
            .then(getAnimals)
        }

        return (
            < AnimalContext.Provider value={{
            animal, addAnimals, getAnimals
        }}>
            {props.children}
            </AnimalContext.Provider>
        )
    }