import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './todoSlice'

function TodoList() {

    const todos = useSelector((state) => state.todo.todos)
    console.log(todos)

    const dispatch = useDispatch()

    return (
        <div>

            <ul>
                {
                    todos && todos.map((data, index) => {
                        return (
                            <li key={index}>{data} <button onClick={() => dispatch(removeTodo(index))}>Delete</button> <button>Edit</button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList