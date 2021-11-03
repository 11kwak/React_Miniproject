import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyPage = () => {
    return (
        <div>
            <h2>잘못된 접근입니다</h2>
            <Link to="/">돌아가세요</Link>
        </div>
    )
}
