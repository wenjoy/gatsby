import React, { useContext } from 'react'
import { ThemeContext } from '../context'

export default function Blog() {
  const {color} = useContext(ThemeContext)
  return <div>
    <h2>This blog is about color</h2>
    <p>{color} is a beautiful color</p>
  </div>
}