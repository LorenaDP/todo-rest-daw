const API_URL = "http://localhost:8080/task/";

const USUARIO = "lorena";
const PASSWORD = "1234";

const boton = document.getElementById("btn-cargar");
const listaTareas = document.getElementById("lista-tareas");

const inputTitulo = document.getElementById("titulo");
const inputDescripcion = document.getElementById("descripcion");
const inputFecha = document.getElementById("fecha-limite");
const botonCrear = document.getElementById("btn-crear");

boton.addEventListener("click", () => {
    cargarTareas();
});

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

        listaTareas.innerHTML = "";

        data.forEach(tarea => {

            const li = document.createElement("li");

            li.textContent = tarea.title;

            listaTareas.appendChild(li);

        });

    } catch (error) {
        console.error("Error:", error);
    }

}

botonCrear.addEventListener("click", async () => {

    const nuevaTarea = {
        title: inputTitulo.value,
        description: inputDescripcion.value,
        deadline: inputFecha.value + ":00"
    };

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa(USUARIO + ":" + PASSWORD)
            },
            body: JSON.stringify(nuevaTarea)
        });

        const data = await response.json();

        console.log("Tarea creada:", data);

    } catch (error) {
        console.error("Error:", error);
    }

});