const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000 // Cualquier puerto a eleccion

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("¡Estoy escuchando tu solicitud! ✅​")
})

app.get("/consulta", (req, res) => {
    res.send("¡Estoy escuchando tu solicitud en la ruta /consulta! ✅​")
})

app.get("/consultaJson", (req, res) => {
    res.json({
        status: "Estoy escuchando tu solicitud en la ruta /consultaJson! ✅​",
    })
})

// Iniciar nuestro Servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en: http://localhost:${PORT}`)
})
 
 