import React, {useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./customers"





export const CustomerList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { customer, getCustomers } = useContext(CustomerContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getCustomers()
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
        <div className="customers">
        {
            customer.map(cus => <Customer key={cus.id} customer={cus} />)
        }
        </div>
    )
}