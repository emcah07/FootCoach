import { useState } from 'react'
import './App.css'
import Card from "./Card/Card";
import Card2 from "./Card/card2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="appall">
        <Card/>
        <Card2/>
      </div>
    </>
  )
}

export default App
