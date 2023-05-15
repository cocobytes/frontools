# Arrays
---


let a = [2,3,4,5]
<br />
<br />

| Metodos                 | Descripción                                |
| -----------             | -----------                                |
| a.push(n)           | Agregar al final &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
| a.unShift(n)            | Agregar al comienzo                       |
| a.pop( )           | Elimina al final                         |
| a.shift( )            | Elimina al comienzo                             |
| a.splice(start,end)           | Elimina en un rango                             |
| a.reverse( )    | Invertir arreglo              |
| a.sort( )            | Ordenar arreglo                       |
| a.join("")         | Convertir a string                  |


### map( )
retorna un nuevo arreglo
```
let n = a.map(val =>{
    return val == 2;
});

// Output: [true, false, false, false]
```

### filter( )
retorna un arreglo con los valores filtrados
```
let n = a.filter(valor =>{
    return valor == 2;
});

// Output: [2]
```

### reduce( )
Devuelve un valor único
```
let n = a.reduce((total, valor) =>{
    return total + valor;
},0);

// Output: [14]
```

### some( )
busca un valor en el array y retorna boolean
```
let n = a.some(valor =>{
    return valor==2;
},0);

// Output: true
```

### findIndex( )
Retorna la posicion del elemento que concida, -1 si no coincide ningun valor
```
let n = a.findIndex(valor =>{
    return valor==2;
},0);

// Output posición: 0
```

### find( )
Retorna el primer valor encontrado
```
let n = a.find(valor =>{
    return valor==2;
},0);

// Output: 2
```

### every( )
Retorna true si todos los elementos cumplen con la condición
```
let n = a.every(valor =>{
    return valor<2;
},0);

// Output: false
```