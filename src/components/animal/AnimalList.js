import React, {useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"





export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animal, getAnimals } = useContext(AnimalContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the Animal state changed.
    */
    // useEffect(() => {
    //     console.log("AnimalList: Animal state changed")
    //     console.log(animal)
    // }, [animal])

    return (
        <div className="animal">
        {
            animal.map(ani => <Animal key={ani.id} animal={ani} />)
        }
        </div>
    )
}