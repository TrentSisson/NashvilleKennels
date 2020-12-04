import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/locationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./locations/locationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}