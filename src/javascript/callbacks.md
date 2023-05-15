# Callback
---

Un callback es una función pasada como parámetro de otra función.

```
function sumar(a,b,callback){
  return callback(a+b);
}

sumar(3,4,function(resultado){
  console.log(resultado); //Output: 7
});
```