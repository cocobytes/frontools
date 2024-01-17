# SUIT CSS

Parte del concepto de funcionalidad / utilidades o herramientas es muy usado en ReactJS

| Nombre       | Carácter        | Nomenclatura   | Sintaxis       |
| -----------  | -----------     | -----------    | -----------    |
| Utilidad     | u-              | normal         | u-propiedad    |
| Namspace     | -(antes)        | normal         | body-Header    |
| Component    |                 | PascalCase     | Header         |
| Elemento (Descendiente)| -(despues)      | LowerCamelCase | Header-h1    |
| Modificador  | --              | LowerCamelCase | Header-h1--negro|
| State        | .               | LowerCamelCase | Header.isActive|

Ejemplo de nomenclatura

```
<header class="Header">
  <h1 class="Header-logo"></h1>
  <ul class="Header-menu">
    <li class="Headlier-li"></li>
    <li class="Headlier-li Header-li.Active"></li>
    <li class="Headlier-li"></li>
  </ul>
</header>
```

### Arquitectura SMACSS (Scalable and Modular Architecture for CSS)
Se basa en estructurar la webb en modulos y en su estructura

* 👉 styles: importa todos los archivos
* 👉 Base: Es el reset y selectores generales de la web
* 👉 Layout: Es la estructura general de la web
* 👉 Modules: Son los elementos reutilizables de la web
* 👉 State: Es el estado de cada modúlo
* 👉 Theme: Son los colores y estilo de los modulos
```
/project
|-- /styles
|   |-- /base
|       |-- reset.css
|       |-- typography.css
|   |-- /layout
|       |-- header.css
|       |-- footer.css
|       |-- grid.css
|   |-- /modules
|       |-- buttons.css
|       |-- forms.css
|       |-- navigation.css
|   |-- /state
|       |-- loading.css
|       |-- error.css
|   |-- /theme
|        |-- colors.css
|        |-- typography.css
|        |-- variables.css
|   |-- main.css
```