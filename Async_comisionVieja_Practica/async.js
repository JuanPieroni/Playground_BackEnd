// ASYNC

console.log("Primer Log")

setTimeout(() => {
    // console.log("Log TimeOut")
}, 1000)

console.log("Ultimo Log")

// LLAMADO A BASE DE DATOS
//Ejemplo de callbacks anidados . Evitar
//Tabla USUARIOS - FAMILIARES

function agregarFamiliar(idUsuario, infoFamiliar) {
    usuarios.findById(idUsuario, function (error, usuario) {
        if (error) {
            return error
        } else {
            familiares.findAllByLastName(
                usuario.lastName,
                function (error, familiares) {
                    if (error) {
                        return error
                    } else {
                        if (familiares.includes(infoFamiliar)) {
                            return "familiar ya existe"
                        } else {
                            familiares.createOne(
                                infoFamiliar,
                                function (error) {
                                    if (error) {
                                        return error
                                    } else {
                                        return "Familiar agregado con exito "
                                    }
                                }
                            )
                        }
                    }
                }
            )
        }
    })
}

// Esto se resuelve con promesas . Las promesas son objetos .
// Tiene 3 estados , estado pending, fullfilled o rejected

// CREAR UNA FUNC PROMESA

const promesaFun = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("Rejected")
        } else {
            resolve(a + b)
        }
    })
}

promesaFun(4, 21)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))

//Tabla USUARIOS - FAMILIARES Bien hecho

function agregarFamiliarProm(idUsuario, infoFamiliar) {
    usuarios
        .findById(idUsuario)
        .then((usuario) => {
            return familiares.findAllByLastName(usuario.lastName)
        })
        .then((familiares) => {
            if (familiares.includes(infoFamiliar)) {
                return "Familiar ya existe"
            } else {
                return familiares.createOne(infoFamiliar)
            }
        })
        .then(() => "Familiar Creado con exito")
        .catch((error) => error)
}

// Ahora lo mismo pero con async Await

async function agregarFamiliarProm(idUsuario, infoFamiliar) {
    try {
        const usuario = await usuarios.findById(idUsuario)
        const familiares = await familiares.findAllByLastName(usuario.lastName)
        if (familiares.includes(infoFamiliar)) {
            return "Familiar ya existe"
        } else {
            await familiares.createOne(infoFamiliar)
            return "Familiar Creado con exito"
        }
    } catch (error) {
        return error
    }
}
