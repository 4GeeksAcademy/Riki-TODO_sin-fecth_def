import React from 'react'


export function TaskItem(props) {

    return (
        <>
            <li>
                <h4>{props.tarea}</h4>
                <h5>id:{props.idTarea}</h5>
                <button onClick={props.deleteTareas}>Eliminar tarea</button>
            </li>
        </>
    )
}
