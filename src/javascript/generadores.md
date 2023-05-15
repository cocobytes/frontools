# Generadores
---
***nameFunction( )**

el símbolo ```*``` antes del nombre crea una función generadora

```
function *generate(){
    yield "Pera";
    yield "Mora";
    yield "Uva";
}

generate().next(); //output: Pera
generate().next(); //output: Mora
generate().next(); //output: Uva
```