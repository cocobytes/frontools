# Eslint
---
Instalacion
```
npm install -D eslint
```

Ejecutar para crear archivo de configuración
```
npx eslint --init
```
se empezara a ejecutar el ayudante para configurar el archivo, una vez terminado, en el archivo ```package.json``` agregar el siguiente script
```
"scripts": {
    "eslint": "eslint ."
}
```

> Realizar el siguiente paso si surge un error

Si surge el siguiente error ```Expected linebreaks to be 'LF' but found 'CRLF'``` en los archivos, agregar la siguiente linea en el archivo de configuracion ```.eslintsrc.js```:

```
"rules": {
    "linebreak-style": 0
}
```