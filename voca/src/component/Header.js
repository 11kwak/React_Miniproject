import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">

            <h1>
                <Link to="/">영단어 암기장</Link>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="link">단어 추가</Link>
                <Link to="/create_day" className="link">Day 변경</Link>





            </div>




        </div>
    )
}
