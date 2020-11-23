import React from "react"
import { Animal } from "./animal/Animal"
import "./animal/Animal.css"
import "./customers/customers.css"
import { Customers } from "./customers/customers"
import { Employees } from "./employees/employees"
import { Location } from "./locations/locations"
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
        
        <h2>Location</h2>
        <article className="locations">
            <Location />
            <Location />
            {/* <Location /> */}
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customers />
            <Customers />
            <Customers />
            <Customers />
        </article>
    </>
)