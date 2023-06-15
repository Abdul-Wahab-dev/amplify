import React , {useState , useEffect} from 'react'

import { API } from "aws-amplify"
const Index =()=> {

    const [tasks , setTasks] = useState([])
    const [name , setName] = useState("")
    const [task , setTask] = useState(0)

    useEffect(()=>{
        console.log("Data");
        callAPi()
    },[])
    const callAPi = ()=>{
        API.get("tasksabdulwahab" , "/todo-tasks/name")
        .then(data => setTasks([...data]))
        .catch(err => console.log(err))
        
    }

    const addTodo = (e)=>{
        e.preventDefault();
       

        API.post("tasksabdulwahab" , "/todo-tasks" , {
            body: {
                name,
                todo: task * 1,
                id: Date.now().toString()
            }
        })
        .then(res =>{ 
            // console.log(res.data)
            callAPi()
            clearState()
        })
        // setTasks([...tasks , obj])
    }
    
    const clearState = ()=>{
        // console.log(name)
        // console.log(task)
        setName("")
        setTask("")

    }

const removeTask = (id)=>{

    const filterTask = tasks.filter(todo => todo.id !== id)
    setTasks(filterTask)
}
  return (
    <div className='container'>
        <div className='form-container'>
            <form>
                <div className='form'>
                    <div>
                        <input type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="Name" />
                        <input type="number" value={task} onChange={e=> setTask(e.target.value)}  placeholder="Task"/>
                        <input type="submit" onClick={addTodo} value="Add TOdo" />
                    </div>
                </div>
            </form>
        </div>
        <div>
            {tasks.length>0 && tasks.map((todo , i) => 
                <div key={todo+i} className="todo" onClick={()=>removeTask(todo.id)}>
                    <span className='remove-icon'>x</span>
                    <div className='todo-name'>
                    {todo.name}
                        </div>
                        <div className='todo-task'>
                            {todo.todo}
                            </div>
                    </div>
            )}
        </div>
    </div>
  )
}

export default Index