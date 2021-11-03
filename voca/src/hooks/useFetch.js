import React from 'react'
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([]);



    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
    }, [])



    return data

}
