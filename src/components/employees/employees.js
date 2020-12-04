import React from "react"
import "./employees.css"

export const Employee = ({employee}) => (
    <section className="employee">
        <h3 className="employees__name">{employee.name}</h3>
        <div className="employees__store">{employee.store}</div>
    </section>
)