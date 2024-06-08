import React from 'react'
import { useRoutes } from 'react-router-dom'
import App from './App'
import AddTask from './component/addtask/AddTask'
import Comp1 from './Comp1'

function Routers() {
  return (
    useRoutes(
    [
        {path:"/",element:<Comp1/>},
        {path:"/addTask",element:<AddTask/>}
    ]
  )
    
  )
}

export default Routers