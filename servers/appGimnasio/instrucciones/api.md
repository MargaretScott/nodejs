# API

CRUD (create, read, update, delete)

Formato: XML / JSON

## REST

- Un comunicación **sin estado** -> TOKEN (jsonwebtoken)

- Conjunto de operaciones a partir de los diferentes verbos 
    - GET - recuperar datos
    - POST - crear un registro
    - PUT, PATCH - editar un registro
    - DELETE - borrar un registro

- Cada recurso (modelo) debe tener su propia url

/api/clientes (GET, POST, PUT, DELETE)

- Deberíamos establecer puntos de unión con el resto de recursos

- En la respuesta de la petición tiene que incluirse todos los datos que hayamos solicitado