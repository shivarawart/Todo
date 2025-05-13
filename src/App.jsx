import { useState, useEffect } from 'react'
import { TodoProvider } from './context/Todo.Context.js'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodosItem.jsx'
import GirlFriend from './components/GirlFriend.jsx' // Assuming this is the correct path for the GirlFriend component

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    ))
  }
 useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

 useEffect(() => {
   localStorage.setItem("todos",JSON.stringify(todos))
 }, [todos])
 
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            < GirlFriend />
    </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App



















// import React, { useState,useContext ,useRef} from 'react'
// useState
// import { Todoprovider } from './context/Todo.Context.js'
// import TodoForm from './components/TodoForm.jsx'
// import TodoItem from './components/TodosItem.jsx'

// const App = () => {

//   const [todos, settodos] = useState([])
//   const addTodo = () =>{
//     setTodos((prev) => [{id:Date.now(), ...todo}, ...prev])
//   }
//   const updateTodo = (id,todo) =>{
//     setTodos((prev) => prev.map((prev.Todo) = (prevTodo.id == id ? todo :prevTodo)))

//   }

// const deleteTodo = (id) => {
// setTodos((prev) => prev.filter((todo) => todo.id !== id))
// }

// const TogleCompleated =(id) => {
//   setTodos((prev) => prev.map((prev.Todo) = prevTodo === 
//   id ? {...prevTodo, compleated : !prevTodo.compleated} : prevTodo))
// }
//  useEffect(() => {
// const todos = JSON.parse(localStorage.getItem('todos'))  
// if(todos && todos.lenth > 0){
//   setTodos(todos)
// }
//  }, [])

//  useEffect(() => {
//    localStorage.setItem("todos",JSON.stringify(todos))
//  }, [todos])
 
 

//   return (
//     <Todoprovider value = {{Todos,addTodo, updateTodo, deleteTodo,
//       TogleCompleated }}>
//     <div className="bg-[#172842] min-h-screen py-8">
//     <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//         <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//         <div className="mb-4">

//            <TodoForm />
//         </div>
//         <div className="flex flex-wrap gap-y-3">

//            {todos.map((todo) => {
//             <div key = {todo.id} className='w-full'>
//               <TodoItem />

//             </div>
              
//            })}
//         </div>
//     </div>
// </div>

// </Todoprovider>
//   )
// }

// export default App
