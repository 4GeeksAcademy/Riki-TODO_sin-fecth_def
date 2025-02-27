import React, { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import "../../styles/index.css";


function Home() {
	const [tarea, setTareas] = useState([])


	const addTareas = (nuevaTarea) => {
		setTareas([...tarea, {
			label: nuevaTarea,
			is_done: false,
			id: Date.now()
		}]);
	}

	const deleteTareas = (id) => {
		setTareas(prevTareas => prevTareas.filter(tarea => tarea.id !== id));
	}

	return (
		<div className="container min-vh-100 d-flex justify-content-center align-items-center">
			<div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
				<h1>Lista de Tareas ✨</h1>
				<TaskForm onAddTareas={addTareas} />
				<TaskList tarea={tarea} deleteTareas={deleteTareas} />
			</div>
		</div>
	);
};



export default Home;