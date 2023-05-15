# Iteradores
---
<br/>

### for( )
```
for(let n = 0; n < 10; n++){
    //code
}
```

### while( )
```
let n = 0;

while(n < 10){
    //code
    n++;
}
```

### do while( )
```
let n = 0;

do{
    //code
    n++;
}while(n < 10);
```

### forEach( )
```
a.forEach((valor,index,array)=>{
    //code
});
```

### for of( )
itera solo valores
```
for(let value of array){
    //code
}
```

### for in( )
```
for(let value in array){
    //code
}
```
<br/>

> Uso de continue y break para el uso de iteradores, solo funciona en el caso de los for

### continue;
El codigo despues del continue no es ejecutado y continua iterando
```
for(...){
    if(...){
        //code
        continue;
    }
    // No ejecuta el codigo de abajo y sigue iterando
}
```

### break;
El iterador termina una vez encuentre el break, similar a un switch case
```
for(...){
    if(...){
        //code
        break;
        //Termina el for
    }
}
```


