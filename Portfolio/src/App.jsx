import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlurIn from "@/components/magicui/blur-in";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BlurIn word={"Hello World"}></BlurIn>
    </>
  )
}

export default App
