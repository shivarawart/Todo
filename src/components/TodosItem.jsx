import React, { useState } from "react";
import { useTodo } from "../context/Todo.Context.js";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-4 my-4">
            <div
                className={`group relative overflow-hidden p-6 rounded-2xl shadow-xl 
                            transition-all duration-300 border border-white/10
                            ${todo.completed
                        ? "bg-gradient-to-r from-green-400/80 to-emerald-500/80 backdrop-blur-md"
                        : "bg-gradient-to-r from-purple-400/80 to-fuchsia-500/80 backdrop-blur-md"}`}
            >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative flex items-center gap-4">
                    <input
                        type="checkbox"
                        className="w-6 h-6 cursor-pointer accent-purple-600 rounded-md border-white/30"
                        checked={todo.completed}
                        onChange={() => toggleCompleted(todo.id)}
                    />

                    <input
                        type="text"
                        className={`flex-grow text-lg px-4 py-2 bg-transparent text-white outline-none 
                                    rounded-xl transition-all duration-300 
                                    ${isTodoEditable ? "border border-white/50" : "border-transparent"}
                                    ${todo.completed ? "line-through opacity-60" : ""}`}
                        value={todoMsg}
                        onChange={(e) => setTodoMsg(e.target.value)}
                        readOnly={!isTodoEditable}
                    />

                    <div className="flex gap-2">
                        <button
                            onClick={() => {
                                if (todo.completed) return;
                                isTodoEditable ? editTodo() : setIsTodoEditable(true);
                            }}
                            disabled={todo.completed}
                            className={`p-3 rounded-xl text-white transition-all duration-300
                                        ${todo.completed
                                ? "bg-white/10 cursor-not-allowed"
                                : "bg-white/20 hover:bg-white/30 active:scale-95"}`}
                        >
                            {isTodoEditable ? "💾" : "✏️"}
                        </button>

                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="p-3 rounded-xl text-white bg-white/20 hover:bg-red-500/70 transition-all duration-300 active:scale-95"
                        >
                            ❌
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
