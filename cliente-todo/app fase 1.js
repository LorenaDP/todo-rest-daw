const API_URL = "http://localhost:8080/task/";

const USUARIO = "lorena";
const PASSWORD = "1234";

const boton = document.getElementById("btn-cargar");

boton.addEventListener("click", async () => {

    try {

        const response = await fetch(API_URL, {
            method: "GET",

            headers: {
                "Authorization": "Basic " + btoa(USUARIO + ":" + PASSWORD)
            }
        });

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error("Error:", error);
    }

});
