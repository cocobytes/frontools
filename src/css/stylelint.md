# Stylelint
---

### Instalación
```
npm install -D stylelint
```

Crear el archivo de configuracion ```.stylelintrc.json``` manual o por comando
```
npm init stylelint
```
Agregar el siguiente script en el ```package.json```
```
"scripts": {
    "csslint": "npx stylelint \"**/*.css\""
}
```

Como opción para ver los errores en ```Visual estudio code``` instalar la extensión <a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank">Stylelint</a> y agregar en el ```settings.json``` la siguiente linea
``` 
"stylelint.validate": ["css", "scss", "sass", "less", "postcss"]
```

### configuración estandar
instalacion
```
npm install -D stylelint-config-standard
```
.stylelintrc.json
```
{
  "extends": "stylelint-config-standard",
  "rules": {
    "selector-class-pattern": null
  }
}
```

### configuración sass
Instalacion
```
npm install -D stylelint-config-standard-scss
```

stylelintrc.json
```
{
    "extends": "stylelint-config-standard-scss",
    "rules": {
        "alpha-value-notation": "number",
        "annotation-no-unknown": true,
        "block-no-empty": true,
        "comment-empty-line-before":"never",
        "comment-no-empty":true,
        "declaration-block-no-duplicate-properties":true,
        "declaration-block-no-redundant-longhand-properties":true,
        "declaration-block-single-line-max-declarations": 0,
        "declaration-no-important":true,
        "font-weight-notation":"numeric",
        "function-name-case": "lower",
        "import-notation":"string",
        "keyframe-block-no-duplicate-selectors": true,
        "keyframe-declaration-no-important":true,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors":true,
        "number-max-precision": 2,
        "rule-empty-line-before": "always",
        "selector-class-pattern": "null",
        "selector-max-attribute": 1,
        "selector-max-id": 0,
        "selector-max-type": 2,
        "selector-pseudo-class-no-unknown":true,
        "selector-type-case":"lower",
        "shorthand-property-no-redundant-values":true,
        "unit-no-unknown":true,
        "value-keyword-case":"lower"
    }
}
```

Si deseas trabajar con metodologia BEM agregar en ```rules``` la siguiente linea
```
"selector-class-pattern": "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$"

```