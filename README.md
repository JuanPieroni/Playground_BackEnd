# 📚 Cómo bajar y subir una nueva clase desde el repo del profe

Cuando el profe suba una nueva clase en una rama distinta, seguí estos pasos para bajarla y tenerla sincronizada en tu propio repositorio.

---

## 🚀 Pasos para bajar y subir una nueva rama/clase

````bash
# 1️⃣ Actualizá la info de las ramas remotas del profe
git fetch profe

# 2️⃣ Creá y cambiá a la nueva rama local basada en la rama del profe
# Reemplazá NOMBRE_RAMA por el nombre exacto que tenga la rama (ej: clase_02)
git checkout -b clase-2 profe/clase_02

# 3️⃣ Subí la rama nueva a tu repo en GitHub para tenerla sincronizada
git push -u origin clase-2

 

| Comando             | Descripción                              |
| ------------------- | ---------------------------------------- |
| `git checkout main` | Volver a la rama principal (`main`)      |
| `git branch`        | Mostrar la rama en la que estás parado   |
| `git branch -r`     | Ver todas las ramas remotas disponibles  |
| `git remote -v`     | Ver las URLs de los remotes configurados |

💡 Tips para no perderte
Siempre fijate bien el nombre exacto de la rama del profe para no tener errores de tipeo.

Usá git branch -r para listar ramas remotas y confirmar nombres antes de hacer checkout.

Cuando termines de trabajar en una rama, volvé a main con git checkout main.

Podés trabajar con ramas separadas para cada clase para mantener el código organizado.

Si querés juntar los cambios de una clase con main, usá git merge nombre_rama.
````
