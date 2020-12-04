import React from "react"
import "./animal/Animal.css"
import "./customers/customers.css"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import {EmployeeProvider} from "./employees/EmployeeProvider"
import {EmployeeList} from "./employees/EmployeeList"
// import { Location } from "./locations/locations"
import { LocationProvider } from "./locations/locationProvider"
import { LocationList } from "./locations/locationList"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList/>
        </AnimalProvider>
        


        <h2>Employees</h2>
            <EmployeeProvider>
            <EmployeeList/>
            </EmployeeProvider>
        

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList/>
        </LocationProvider>

        <h2>Customers</h2>
            <CustomerProvider>
            <CustomerList/>
            </CustomerProvider>
    </>
)