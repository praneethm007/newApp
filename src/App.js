import './App.css';
import { createContext, useEffect, useState } from 'react';
import AddTask from './component/addtask/AddTask';
import ViewTask from './component/viewTask/ViewTask';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

export const ContextExample = createContext()

function App() {

  const [dummyValue,setDummyValues] = useState("hai")

  const changeDummyValue=(data)=>{
    setDummyValues(data)
  }

  const [taskList,setTaskList] = useState([])

  const handelDeleteList=(task)=>{
    const newData = taskList.filter(i=>i!==task)
    setTaskList(newData)
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then((data)=>{console.log(data)})
  },[])
  return (
    <>
    <ContextExample.Provider value={[dummyValue,changeDummyValue]}>


    {/* <AddTask setTaskList={setTaskList} />
    {taskList.length > 0 && taskList.map((task,index)=>{
      return(
        <ViewTask task={task} index={index}  deleteList={handelDeleteList}/>
      )
    })} */}
    <Comp1/>

    <Comp2/>
  


    </ContextExample.Provider>
    </>
  );
}

export default App;
