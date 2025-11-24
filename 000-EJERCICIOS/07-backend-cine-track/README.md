# Backend Cine Track

1. Instalar express como dependencia normal
2. Instalar typescript, tsx como dependencias de desarrollo (-D)

## Lista de peticiones

### Usuarios

- GET /users/login
  - Comprueba un usuario por su email y contraseña
  - BODY: email, password
  - HEADERS: 'Content-Type': 'application/json'
  - AUTENTICACION: NO
  
- POST /users/register
  - Registra un nuevo usuario
  - BODY: username, email, password
  - HEADERS: 'Content-Type': 'application/json'
  - AUTENTICACION: NO
  
- DELETE /users/:userId
  - Borra un usuario por su ID
  - HEADERS: 'Content-Type': 'application/json'
  - SEGURIDAD: Solo se puede borrar un usuario si es el mismo que el usuario que está autenticado
  - AUTENTICACION: SI
  
- PATCH /users/:userId
  - Actualiza un usuario por su ID
  - BODY: username?, email?, password?
  - HEADERS: 'Content-Type': 'application/json'
  - SEGURIDAD: Solo se puede actualizar un usuario si es el mismo que el usuario que está autenticado
  - AUTENTICACION: SI

### Movies


-GET /movies/watchlist
 - Obtiene la lista de watchlist
 - AUTENTICACION: SI

- POST /movies/watchlist
  - Añade un movie a la lista de watchlist
  - BODY: movie
  - HEADERS: 'Content-Type': 'application/json'
  - SEGURIDAD: Solo se puede añadir una nueva si estás autenticado. Y esta se añadirá a la lista de watchlist del usuario que está autenticado.
  - AUTENTICACION: SI

- DELETE /movies/watchlist/:movieId
  - Borra un movie de la lista de watchlist
  - AUTENTICACION: SI

- GET /movies/watched
  - Obtiene la lista de movies que has visto
  - AUTENTICACION: SI


- POST /movies/watched
  - Añade un movie a la lista de movies que has visto
  - BODY: movie
  - HEADERS: 'Content-Type': 'application/json'
  - SEGURIDAD: Solo se puede añadir una nueva si estás autenticado.
  - AUTENTICACION: SI

- DELETE /movies/watched/:movieId
  - Borra un movie de la lista de movies que has visto
  - AUTENTICACION: SI