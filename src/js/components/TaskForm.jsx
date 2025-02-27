import React, { useState } from 'react'



export function TaskForm(props) {
    
    const [ datosForm, setdatosForm ] = useState({name:""}) 
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (datosForm.name.trim() === "") {
            console.log("La tarea no puede estar vacía")
            return;
        }
        props.onAddTareas(datosForm.name);
    };

  return (
    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label hymlFor="taskTitle" className="form-label">
                            Título de la tarea
                        </label>
                        <input
                            type="text"
                            id="taskTitle"
                            value={datosForm.name}
                            onChange={(e) => setdatosForm(prevState => ({...prevState, name: e.target.value}))}
                            placeholder="Ej: Pasear la tortuga"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Añadir tarea
                    </button>
                </form>
  )
}
