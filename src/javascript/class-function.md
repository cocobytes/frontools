# Class function
---

Creación de una clase con propiedades y métodos
```
class User{
    constructor(name, year){
        this.name = name;
        this.year = year;
        this.state = function(){
            retun 'Activated';
        }
    } 
}
```

### Protoypes

```
class User{
    constructor(name){
        this.name = name;        
    }
    
    //Prototypes
    getName(){
        return this.name;
    }
}
```

### Herencia
Para heredar las propiedades y métodos se utiliza extends en la clase hija

```
class User{
    constructor(name){
        this.name = name;        
    }
}

class Balance extends User{}
```
Para obtener las propiedades y llamar métodos dentro de la clase hija se usa la palabra reservada ```super()```

```
class User{
    constructor(name){
        this.name = name;        
    }
}

class Balance extends User{
    constructor(name, year){
        super(name); llama y establece el valor que se pasa
        this.year = year;
    }
}
```