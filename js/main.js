const persona = {
    nombre: "Jose",
    correo: "Jose@gmail.com",
};

//DOM
const datosPintados = document.querySelector("#contenedor");
document.addEventListener("click", (ev) => {
    if (ev.target.matches("button")) {
        // console.log(ev);
        // obtenerPersona();
        llamarObjetoPersona();
    }
});

const llamarObjeto = () => {
    return (promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(persona);
            } else {
                reject("No se encuentra datos solicitados");
            }
        }, 1000);
    }));

    // console.log(promise);
    // return promise;
};

const obtenerPersona = () => {
    llamarObjeto()
        .then((respuesta) => {
            pintarDatos(respuesta);
            // console.log(respuesta);
            // return resultadoName;
        })

        .catch((error) => {
            // resultadoName = error;
            // console.log(error);
            pintarError(error);
        });
};

const pintarDatos = ({ nombre, correo }) => {
    const ul = document.createElement("ul");
    const liNombre = document.createElement("li");
    liNombre.textContent = `${nombre}`;
    const liCorreo = document.createElement("li");
    liCorreo.textContent = `${correo}`;
    ul.append(liNombre, liCorreo);
    datosPintados.append(ul);
    datosPintados.replaceChildren(ul);
};

const pintarError = (mensaje) => {
    const p = document.createElement("p");
    p.textContent = mensaje;
    p.classList = 'mensajeError',
    datosPintados.replaceChildren(p);
};

// Async/await

const llamarObjetoPersona = async () => {
    try {
        const resultado = await llamarObjeto();
        pintarDatos(resultado);
    } catch (error) {
        pintarError(error);
    };
};
