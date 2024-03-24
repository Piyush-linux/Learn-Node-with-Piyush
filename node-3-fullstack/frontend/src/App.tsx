import {useState,useEffect} from "react";
import axios from "axios"

function App() {

  // 1. Store data
  const [todo,setTodo] = useState([])

  // 2. Fetch Data and store into Todo
  useEffect(()=>{
    // let API = "http://localhost:3000/api/v1"
    axios.get("/api/todo")
    .then((response)=> {
      console.log(response.data)
      setTodo(response.data);
    }).catch((error)=>{
      console.log(error)
    })

  },[])

  return (
    <div>
      {/* Render Todos */}
      { todo.map((itm,index)=>(
          <div style={{marginTop:"2rem"}} key={index}> { itm.name } </div>
        )
      )}
    </div>
  )
}

export default App
