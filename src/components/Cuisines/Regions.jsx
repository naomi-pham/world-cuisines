import React from "react"
import {NavLink} from "react-router-dom"
import SectionTitle from "../Typography/SectionTitle"
import Slide from '../Slide/Slide'
import SelectCard from '../Card/SelectCard'

 
function Regions() {

    const cuisineNames = [
        {
            id: 1,
            name: "Italian",
            icon: "pizza",
        },
        {
            id: 2,
            name: "French",
            icon: "baguette",
        },
        {
            id: 3,
            name: "Chinese",
            icon: "bowl-rice",
        },
        {
            id: 4,
            name: "Japanese",
            icon: "sushi",
        },
        {
            id: 5,
            name: "British",
            icon: "bowl-hot",
        },
        {
            id: 6,
            name: "American",
            icon: "popsicle",
        },
        {
            id: 7,
            name: "Indian",
            icon: "pear",
        },
        {
            id: 8,
            name: "Vietnamese",
            icon: "bowl-rice",
        },
        {
            id: 9,
            name: "Polish",
            icon: "bowl-hot",
        },

    ]

    return (
        <Slide>
            {cuisineNames.map(cuisine => {
                return (
                    <NavLink key={cuisine.id} to={`/cuisines/${cuisine.name}`}>
                        <SelectCard>
                            <p className="sm:text-lg text-sm font-bold">{cuisine.name}</p>
                            <i className={`bx bxs-${cuisine.icon} badge badge-secondary`}></i>    
                        </SelectCard>
                    </NavLink>
                )
            })}
        </Slide>
    )
}

export default Regions
