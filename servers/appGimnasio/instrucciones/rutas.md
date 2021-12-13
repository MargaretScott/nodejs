# Rutas Vistas (NO API)

Todas las rutas responden con un res.send

- GET /clientes -> Renderizar una vista con la lista de clientes
- GET /clientes/new -> Renderizar un formulario para crear clientes
- POST /clientes/create -> Recibimos los datos del formulario y creamos un cliente
- GET /clientes/edit/:clienteId -> Renderizar un formulario para editar un cliente
- POST /clientes/update -> Recibe los datos de edición del formulario y edita el cliente
- GET /clientes/delete/:clienteId -> Borra un cliente

-----
- Creamos **clientes.js** dentro de la carpeta routes
- Conectamos **app.js** con **clientes.js**
- Generamos las rutas de arriba
- Dentro del fichero **peticiones.rest** creamos las pruebas sobre dichas rutas