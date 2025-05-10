import React, { useState } from 'react';
import { useTodo } from "../context/Todo.Context.js";

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!todo.trim()) return

        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-2xl mx-auto mt-6">
            <div className="flex">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="✍️ What's on your mind today?"
                    className="w-full px-4 py-3 text-lg border-2 border-purple-300 rounded-l-xl 
                             outline-none duration-300 bg-white/90 placeholder:text-gray-400
                             focus:border-purple-600 focus:shadow-lg"
                />
                <button 
                    type="submit" 
                    className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r 
                             from-purple-600 to-purple-700 rounded-r-xl hover:from-purple-700 
                             hover:to-purple-800 transition-all duration-300 shadow-md 
                             hover:shadow-lg active:scale-95"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export default TodoForm;

