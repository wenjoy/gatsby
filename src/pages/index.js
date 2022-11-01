import React, { useState } from "react"
import Card from '../components/Card'
import Content from '../components/Content'
import { ThemeContext } from '../context'

export default function Home() {
  // const data = { color: "blue" }
  const [data, setColor] = useState({color: "blue"})
  const setData = () => {
    // data.color = "red"
    setColor({color: "red"})
    console.log('color is changed', data);
  }

  return <div>
    <p>Hello world!</p>
    <ThemeContext.Provider  value={data}>
      <Card onClick={setData} />
      <Content />
    </ThemeContext.Provider>
  </div>
}
