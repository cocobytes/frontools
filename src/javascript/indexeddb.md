# IndexedDB
---
window.indexedDB

### Establecer conexion
Si no existe la base de datos se creara y establece la conexión.

```
const CONEXION = window.indexedDB.open(name,version);
```

### Crear tabla y columnas
el método onupgradeneeded solo se ejecuta una vez.

```
CONEXION.onupgradeneeded = (e)=>{
    const DB = e.target.result;
    const OBJECT_STORE = DB.createObjectStore(nameTable,{
        keyPath: tableId,
        autoIncrement: true
    });
    OBJECT_STORE.createIndex(nameColumn, keyPath, {});
}
```

### Agregar valores
```
CONEXION.onsucess = ()=>{
    const TRANSACTION = CONEXION.result.transaction([tableName],'readwrite');
    const STORE = TRANSACTION.objectStore(tableName);
    STORE.add(data);
}
```

### Actualizar valor
```
CONEXION.onsucess = ()=>{
    const TRANSACTION = CONEXION.result.transaction([tableName],'readwrite');
    const STORE = TRANSACTION.objectStore(tableName);
    STORE.put(data);
}
```

### Eliminar valor
```
CONEXION.onsucess = ()=>{
    const TRANSACTION = CONEXION.result.transaction([tableName],'readwrite');
    const STORE = TRANSACTION.objectStore(tableName);
    STORE.delete(data);
}
```
