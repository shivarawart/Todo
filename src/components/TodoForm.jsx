import React, { useState } from 'react';
import { useTodo } from "../context/Todo.Context.js";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;

        addTodo({ todo, completed: false });
        setTodo("");
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-10 text-purple-600 tracking-widest drop-shadow-md">
                ✨ My Magical Todo List
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-purple-200/30"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            placeholder="✍️ What's on your mind today?"
                            className="w-full px-6 py-4 text-lg border border-purple-900/60 
                                       rounded-xl  backdrop-blur-md text-white bg-white/10
                                       placeholder:text-purple-300 focus:outline-none focus:ring-2 
                                       focus:ring-purple-400 transition duration-300"
                        />
                        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-purple-400">
                            💭
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br 
                                   from-purple-500 to-fuchsia-600 rounded-xl hover:from-purple-600 
                                   hover:to-fuchsia-700 transition-all duration-300 shadow-xl 
                                   hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        <span>Add Task</span>
                        <span className="text-xl">➕</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
