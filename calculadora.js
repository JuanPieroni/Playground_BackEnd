async function cargarOperacionesMatematicas() {
    try {
        const operacion = await import("./operacionesMatematicas.js")
        console.log(typeof operacion)
        console.log(operacion.sumar(2, 3))
        console.log(operacion.restar(5, 3))
    } catch (error) {
        console.error("Error al cargar las operaciones matemáticas:", error)
    }
}

cargarOperacionesMatematicas()
