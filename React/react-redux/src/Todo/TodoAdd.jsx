import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function TodoAdd() {

    const [form, setform] = useState("")

    const dispatch = useDispatch()

    const submitdata = (e) => {
        e.preventDefault()

        dispatch(addTodo(form))
        setform("")
    }

    return (
        <div>
            <h1>hello this TODO LIST</h1>
            <form action="">
                <input type="text" value={form} onChange={(e) => setform(e.target.value)} placeholder='Enter your name' />
                <button onClick={submitdata}>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoAdd