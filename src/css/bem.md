# BEM

La metodologia bem se usa de la siguiente manera ```BLOCK__ELEMENT--MODIFIER```
```
<article class="card">
    <img class="card__image" src="hotel.jpg" alt="Imagen hotelario">
    <div class="card__ranking">
        <p class="card__type">Entire apartment</p>
        <div class="card__stars">
            <div class="card__icon">
                <i class="ri-star-fill"></i>
            </div>
            <p class="card__calification">4.4</p>
        </div>
    </div>
    <h3 class="card__name">Stylist apartment in center of the citiy</h3>
</article>
```

> se puede agregar las siguientes carpetas en cualquier arquitectura ```vendor/``` y ```themes/```

### Arquitectura OOCSS (Object-Oriented CSS)
Se organiza solo con múltiples archivos de estilo o usando diferentes carpetas

* 👉 styles: importa todos los archivos
* 👉 base: con el reset de CSS
* 👉 layuot: Grid, Flex...(Mixins)
* 👉 modules: Estilos de objetos (bloques, contenedores)
* 👉 other: codigo extra que complementa a modúlos
* 👉 shame: Donde ponemos los arreglos de CSS (!important)

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
|       |-- forms.scss
|   |-- /modules
|       |-- sidebar.css
|       |-- gallery.css
|   |-- /other
|       |-- animations.css   
|       |-- custom.css     # Estilos personalizados que no encajan en otras categorías
|       |-- print.css      # Estilos específicos para impresión
|   |-- /shame
|       |-- quick-fix.css
|       |-- temporary-style.css
|   |-- main.css
```
### Arquitectura ITCSS (Inverted Triangle CSS)
Se basa en definir clases en base a funcionalidad, es muy usado en ReactJS

* 👉 styles: importa todos los archivos
* 👉 Settings: Son las variables, font-size, Colores, Breakpoints..
* 👉 Tools: Son los mixins, @media, clearfix
* 👉 Generic: Las propiedads generales como el reset
* 👉 Elements: Apariencia con selectores ```<tag>```
* 👉 Objects: Apariencia con selectores de clases
* 👉 Components: Conjunto de etiquetas
* 👉 Utilities: Son las excepciones de diseño

```
/project
|-- /styles
|   |-- /settings
|       |-- colors.css
|       |-- typography.css
|   |-- /tools
|       |-- mixins.css
|       |-- functions.css
|   |-- /generic
|       |-- reset.css
|       |-- global.css
|   |-- /elements
|       |-- headings.css
|       |-- links.css
|   |-- /objects
|       |-- container.css
|       |-- card.css
|   |-- /components
|       |-- button.css
|       |-- form.css
|   |-- /utilities
|       |-- spacing.css
|       |-- alignment.css
|   |-- main.css
```