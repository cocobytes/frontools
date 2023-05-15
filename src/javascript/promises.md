# Promises
---
es un objeto que representa la terminación o el fracaso de una operación asíncrona.
```
function isAuthenticate(){
  let auth = true;
  
  return new Promise((resolve,reject)=>{
    if(auth){
      resolve('Usuario autenticado');
    }else{
      reject('Usuario no esta autenticado');
    }
  });
}

isAuthenticate()
.then(resp=>{
  console.log(resp);
})
.catch(error =>{
  console.log(error);
});

//Output: Usuario autenticado
```