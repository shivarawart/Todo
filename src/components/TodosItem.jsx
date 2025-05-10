import React, { useState } from "react";
import { useTodo } from "../context/Todo.Context.js";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);    const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const handleToggleCompleted = () => {
        toggleCompleted(todo.id);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className={`flex items-center p-4 mb-4 rounded-xl shadow-lg transition-all duration-300 
                           ${todo.completed ? "bg-gradient-to-r from-green-200 to-green-300" : 
                           "bg-gradient-to-r from-purple-100 to-purple-200"}`}>
                
                <input
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer accent-purple-600 rounded-full mr-3"
                    checked={todo.completed}
                    onChange={handleToggleCompleted}
                />
                
                <input
                    type="text"
                    className={`flex-grow px-3 py-2 text-lg bg-transparent rounded-lg outline-none
                              transition-all duration-300
                              ${isTodoEditable ? "border-2 border-purple-400" : "border-transparent"}
                              ${todo.completed ? "line-through text-gray-600" : "text-gray-800"}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />
                
                <div className="flex gap-2 ml-4">
                    <button
                        className={`p-2 rounded-lg text-white transition-all duration-300 
                                  ${todo.completed ? "bg-gray-400 cursor-not-allowed" : 
                                  "bg-purple-600 hover:bg-purple-700 active:scale-95"}`}
                        onClick={() => {
                            if (todo.completed) return;
                            if (isTodoEditable) {
                                editTodo();
                            } else {
                                setIsTodoEditable(prev => !prev);
                            }
                        }}
                        disabled={todo.completed}
                    >
                        {isTodoEditable ? "💾" : "✏️"}
                    </button>
                    
                    <button
                        className="p-2 rounded-lg text-white bg-red-500 hover:bg-red-600 
                                 transition-all duration-300 active:scale-95"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        ❌
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
