import { useState, useEffect } from 'react'
import './App.css'
import Greeting from "./components/Greeting"
import ClickHandler from "./components/ClickHander"
import InputHandler from "./components/InputHandler"
import FormHandler from "./components/FormHandler"
import MultipleEventHandler from "./components/MultipleEventHandler"

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Componenet has rendered.');
        return () => {
            console.log('Code that runs before next render or unmount.');
        }
    }, [count])

  return (
    <>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
          </div>
          <Greeting isLoggedIn={false} />
          <ClickHandler />
          <InputHandler />
          <FormHandler />
          <MultipleEventHandler />
      </>
  )
}

export default App
