import React, { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import "../../styles/index.css";


function Home() {
	const [tarea, setTareas] = useState([])

	const getTareas = async () => {
		try {
			const response = await fetch(
				"https://playground.4geeks.com/todo/users/riki"
			);

			// 👉 Verificamos si la petición fue exitosa
			if (!response.ok) {
				throw new Error("¡Vaya! No hemos podido obtener las tareas");
			}

			// 👉 Convertimos la respuesta a JSON
			const data = await response.json();
			setTareas(data.todos)
			console.log(data.todos)


		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getTareas();
	}, []);

	const addTareas = async (nuevaTarea) => {
		try {
			const response = await fetch('https://playground.4geeks.com/todo/todos/riki',
				{
					method: 'POST', // 👈 Especificamos que es POST
					headers: {
						'Content-Type': 'application/json', // 👈 Indicamos que enviamos JSON
					},
					// 👉 Convertimos nuestro objeto a string JSON
					body: JSON.stringify({
						label: nuevaTarea,
						is_done: false
					}),
				}
			);

			if (!response.ok) {
				throw new Error('Error al crear la tarea');
			}

			const data = await response.json()
			console.log(data)

			setTareas([...tarea, data]);

		} catch (error) {
			console.log(error)
		}
	}


	const deleteTareas = async (id) => {
		try {
			const response = await fetch(
				`https://playground.4geeks.com/todo/todos/${id}`,
				{
					method: 'DELETE', // 👈 Especificamos que es DELETE
				}
			);
			if (!response.ok) {
				throw new Error('Error al borrar la tarea');
			}
			setTareas(prevTareas => prevTareas.filter(tarea => tarea.id !== id));
		} catch (error) {
			console.log(error)
		}
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