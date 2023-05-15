# Asyn await
---
el async debe ir antes de la función y el await debe esperar el retorno de una promesa

```
function listar() {
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve('Listado completado');
    },2000);
  });
}

async function ejecutar() {
  const resp = await listar();
  //No ejecuta el codigo hasta resolver el await
  console.log(resp);
  console.log('Terminado');
}

ejecutar();
```

Ejecutando async await simulando varias peticiones y esperando que una petición se realice para realizar la siguiente.

```
function listUsers(){
  console.log('Descargando usuarios...');

  return new Promise((resolve,reejct)=>{
    setTimeout(()=>{
      resolve('Usuarios descargados');
    },2000);  
  });
}

function listProducts(){
  console.log('Descargando productos...');

  return new Promise((resolve,reejct)=>{
    setTimeout(()=>{
      resolve('productos Descargados');
    },5000);  
  });
}

async function execute(){
  const users = await listUsers();
  
  //Esperar que se termina de cargar la lista usuarios y empieza
  //la otra ejecucion
  
  console.log(users);
  
  //Realizar al otra peticion
  const products = await listProducts();
  console.log(products);
}

execute();
```
> El problema de ejecutar await con difentes peticiones, es que las peticiones  dependen de la ejecucion de la otra, por lo que espera ah que termine una petición para ejecutar la otra y no realizar ambas peticiones a la vez, para resolver el problema se debe ejecutar ```Promises.all()``` que ejecuta ambas peticiones sin importar el tiempo de la otra y sin detener el código.

```
async function execute(){
  const RESPONSE = await Promises.all([listUsers(),listProducts()]);
  console.log(RESPONSE[0]);
  console.log(RESPONSE[1]);
}

execute();
```

Con esto permitimos que se realicen ambas peticiones y al cargar todas se imprime la respuesta de cada una.