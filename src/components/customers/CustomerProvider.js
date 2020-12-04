import React, { useState, useEffect } from "react"
import { Customers } from "./customers"



export const CustomerContext = React.createContext()

export const CustomerProvider = (props) => {
    const [customer, SetCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(SetCustomers)
    }
        const addCustomers = Customers => {
            return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(Customers)
            })
            .then(getCustomers)
        }

        return (
            < CustomerContext.Provider value={{
            customer, addCustomers, getCustomers
        }}>
            {props.children}
            </CustomerContext.Provider>
        )
    }