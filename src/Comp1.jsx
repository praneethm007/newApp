import React, { useContext } from 'react'
import { ContextExample } from './App'
import { useNavigate } from 'react-router-dom'

function Comp1() {

    const navigate= useNavigate()

    const handleRoute=()=>{
        navigate("/addTask")
    }

  return (
    <>
    <div>comp1</div>
    <button onClick={handleRoute}>Change the route</button>
    </>
  )
}

export default Comp1