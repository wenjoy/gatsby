import React, { useContext } from 'react'
import { ThemeContext } from '../context'

export default function Card({onClick}) {
  const {color} = useContext(ThemeContext)
  return <div>
    <p>current value is : </p>
    <div>color: {color}</div>
    <button onClick={onClick}>Change color</button>
    </div>
}