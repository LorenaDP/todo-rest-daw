const API_URL = "http://localhost:8080/task/";

const USUARIO = "lorena";
const PASSWORD = "1234";

const boton = document.getElementById("btn-cargar");
const listaTareas = document.getElementById("lista-tareas");

// El botón SOLO llama a la función
boton.addEventListener("click", () => {
    cargarTareas();
});

// Función reutilizable
async function cargarTareas() {

    try {

        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Authorization": "Basic " + btoa(USUARIO + ":" + PASSWORD)
            }
        });

        const data = await response.json();

        console.log(data);

        // Vaciar lista antes de pintar
        listaTareas.innerHTML = "";

        // Recorrer tareas
        data.forEach(tarea => {

            const li = document.createElement("li");

            li.textContent = tarea.title;

            listaTareas.appendChild(li);

        });

    } catch (error) {
        console.error("Error:", error);
    }

}
