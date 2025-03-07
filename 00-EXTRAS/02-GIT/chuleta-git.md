# Chuleta comandos de GIT

1. El primer paso antes incluso de crear ninguna carpeta sería decirle a tu ordenador QUIÉN ERES

`git config --global user.name "vuestro nombre"` 

`git config --global user.email "vuestro-email"` 

2. Ahora ya GIT sabe quién eres. Para empezar a utilizar GIT en cualquier proyecto, necesitas inicializar un repositorio en esa carpeta.
3. `git init` 👉 El primer comando para inicializar GIT en una carpeta
4. `git status` 👉 Es el comando que te va a decir en todo momento el estado de tu repositorio/proyecto/carpeta
5. `git add (nombre-archivo)` 👉 Para poner ese archivo preparado para una foto (commit)
   1. Puedes añadir todos los archivos preprados para la foto A LA VEZ si usas `git add .`
6. `git commit -m "mensaje o comentario"` 👉 Para hacer una foto de ese momento de todo el código. 
7. `git push` 👉 Sirve para subir los últimos commits al Remoto que sea, Github én este caso.
8. `git pull` 👉 Sirve para TRAERTE los últimos cambios de un repositorio REMOTO a tu carpeta LOCAL.