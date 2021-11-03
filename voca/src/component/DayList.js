import React from 'react'
import dummy from "../db/data.json"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

export const DayList = () => {

    const days = useFetch('http://localhost:3001/days')



    if (days.length === 0) {
        return <span>Loading...</span>
    }

    // const [days, setDays] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setDays(data)
    //         })
    // }, [])


    console.log(dummy)
    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>
                        Day {day.day}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
