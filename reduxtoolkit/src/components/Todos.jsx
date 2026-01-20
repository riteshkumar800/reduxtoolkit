import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'


const Todos = () => {

    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
  return (
    <div>
      
    </div>
  )
}

export default Todos
