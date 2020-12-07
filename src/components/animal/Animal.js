import React from "react"
import "./Animal.css"

export const Animal = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed"><h4>Breed: {animal.breed}</h4></div>
        <div className="animal__customerId"><h4>Customer: {animal.customerId}</h4></div>
        <div className="animal__locationId"><h4>Location: {animal.locationId}</h4></div>
    </section>
)