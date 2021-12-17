# Gimnasio Front

- Componentes: 
    - Menu (tiene que estar siempre visible -> app.component.html)
    - ListaClientes - RUTA: /clientes
    - FormClientes - RUTA: /clientes/new
    - Login - RUTA: /login
    - Registro - RUTA: /registro

{ path: '', redirectTo: '/clientes' }
{ path: 'clientes', component: ListaClientes },
{ path: 'clientes/new', component: FormClientes }

```
ng generate component clientes/ListaClientes --skip-tests
```