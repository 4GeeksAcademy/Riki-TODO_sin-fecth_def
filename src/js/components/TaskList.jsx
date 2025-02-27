import React from 'react'
import {TaskItem} from "./TaskItem";




export function TaskList(props) {
  return (
    <ul>
      {
        !props.tarea || props.tarea.length === 0 ? (
          <h4>No hay tareas</h4>
        ) : (
          props.tarea.map((task) => (
            <TaskItem
              key={task.id}
              tarea={task.label}
              deleteTareas={ () => props.deleteTareas (task.id)}
            />
          ))
        )
      }
    </ul>
  )
}
