import React from "react"
import { Animal } from "./animal/Animal"
import "./animal/Animal.css"
import "./customers/customers.css"
import { Customers } from "./customers/customers"
import { Employees } from "./employees/employees"
// import { Location } from "./locations/locations"
import { LocationProvider } from "./locations/locationProvider"
import { LocationList } from "./locations/locationList"
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>


        <h2>Employees</h2>
        <article className="customers">
            <Employees />
            <Employees />
            <Employees />
        </article>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Customers</h2>
        <article className="customers">
            <Customers />
            <Customers />
            <Customers />
            <Customers />
        </article>
    </>
)