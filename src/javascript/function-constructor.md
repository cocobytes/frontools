# Function constructor
---

Una función constructora es una forma de crear objetos de manera dinámica siguiendo ciertas reglas a la hora de crear objetos.

```this``` Mantiene la referencia de las propiedades.

```new``` Es un operador que permite crear e inicializar un objeto mediante una función constructora, la palabra ```new``` hace lo siguiente:
1. Crea un objeto JavaScript simple y en blanco
2. Vincula (establece el constructor de) este objeto a otro objeto
3. Pasa el objeto recién creado del Paso 1 como el contexto ```this```
4. Devuelve ```this``` si la función no devuelve un objeto

```
function User(name, year, county){
    this.name = name;
    this.year = year;
    this.country = country;
}

const INSTANCE_USER = new User('Laory','22','Canada'); 
```

<br/>

### Protoypes
Los prototypes son métodos exclusivos que solo se podrán usar en el objeto creado, se pueden crear dentro o afuera de la función.
```
function User(name, year, country){
    this.name = name;
    this.year = year;
    this.country = country;
    
    User.prototype.getName = function(){
        return this.name;
    }
    
    User.prototype.state= function(){
        return 'Activated';
    }
}
```

### Herencia
El metodo ```call()``` hereda las propiedades y métodos de la clase llamada.
```
function User(name, year){
    this.name = name;
    this.year = year;
}

function Balance(money){
    User.call(this,name);
    this.money = money;
}
```

Para heredar los prototypes de  ```User()``` se debe clonar y asignarlas de manera manual
```
Balance.prototype = Object.create(User.prototype);
```