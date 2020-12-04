import React, {useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./employees"





export const EmployeeList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getEmployees()
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
        <div className="employees">
        {
            employees.map(emp => <Employee key={emp.id} employee={emp} />)
        }
        </div>
    )
}