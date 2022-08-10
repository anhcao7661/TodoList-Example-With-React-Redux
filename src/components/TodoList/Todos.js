import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import './Todos.css'

const Todos = () => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const [todo, setTodo] = useState()
    const handleChange = (e) => setTodo(e.target.value)
    const handleClickAdd = () => dispatch({
        type: 'ADD_TODO',
        payload: {
            label: todo,
            id: Math.ceil(Math.random() * 100),
        }
    })
    const handleClickDelete = (id) => dispatch({
        type: 'DELETE_TODO',
        payload: id,
    })

    return (
        <div className='todos'>
            <h1>Add todo</h1>
            <div className='input'>
                <input value={todo} onChange={handleChange} type="text" />
                <button onClick={handleClickAdd}>ADD!</button>
            </div>
            <ul>
                {todos.map(todo =>
                    <div className='list'>
                        <li>{todo.label}</li>
                        <button onClick={() => handleClickDelete(todo.id)}>Delete</button>
                    </div>
                )}
            </ul>
        </div>

    )

}



export default Todos