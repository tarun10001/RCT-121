import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../App.css"

export const SearchRes = () => {
    const [data, setData] = useState([])
    const [s, setS] = useState("")
    const [text, setText] = useState("")
    useEffect(() => {
        axios(`${process.env.REACT_APP_MY_API_KEY}`, {
            method: "get",
            params: {
                s:s
            }

        }).then(res => {
            
            setData(res.data)
            console.log(res.data.meals)
        }).catch(err => {
            console.log(err)
        })
    }, [s])
    return (
        <div>
            <h1>Search Restaurent</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='enter name' />
            <button onClick={() => {
                setS(text)
                setText("")
            }}>Search</button>
            {
                data.meals?.map(e => {
                    return (
                        <div className='restaurant-page' key={e.idMeal}>
                                <img src={e.strMealThumb} alt="" />
                                <h3>{e.strMeal}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}