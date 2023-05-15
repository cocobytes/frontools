(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{289:function(a,e,s){a.exports=s.p+"assets/img/poshcmd.5000fa26.png"},290:function(a,e,s){a.exports=s.p+"assets/img/font.afb12c07.png"},291:function(a,e,s){a.exports=s.p+"assets/img/arrastrar.7bfc6871.png"},292:function(a,e,s){a.exports=s.p+"assets/img/theme.4c44c4ec.png"},302:function(a,e,s){"use strict";s.r(e);var t=s(7),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"oh-my-posh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-posh"}},[a._v("#")]),a._v(" Oh my posh")]),a._v(" "),e("hr"),a._v(" "),e("img",{attrs:{src:s(289)}}),a._v(" "),e("h3",{attrs:{id:"_1-instalacion-para-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-instalacion-para-windows"}},[a._v("#")]),a._v(" 1) Instalacion para windows")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("winget install JanDeDobbeleer.OhMyPosh -s winget\n")])])]),e("h3",{attrs:{id:"_2-verficar-instalacion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-verficar-instalacion"}},[a._v("#")]),a._v(" 2) Verficar instalacion")]),a._v(" "),e("p",[a._v("Una vez instalado reiniciar la terminal y ejecutar el siguiende comando para revisar.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("oh-my-posh get shell\n")])])]),e("h3",{attrs:{id:"_3-archivo-de-configuracion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-archivo-de-configuracion"}},[a._v("#")]),a._v(" 3) Archivo de configuración")]),a._v(" "),e("p",[a._v("Para crear el archivo de configuración de la terminal escribir el siguiente comando.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("New-Item -Path $PROFILE -Type File -Force\n")])])]),e("h3",{attrs:{id:"_4-instalar-fuente"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-instalar-fuente"}},[a._v("#")]),a._v(" 4) Instalar fuente")]),a._v(" "),e("p",[a._v("Una vez creado el archivo, se debe instalar la fuente para reconocer los iconos, enlace para descargar la fuente "),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.1/Hack.zip"}},[a._v("Hack Nerd Font")])]),a._v(" "),e("p",[a._v("El siguiente paso es agregar las fuentes al sistema, escribir la palabra "),e("code",[a._v("font")]),a._v(" en el buscador y seleccione:\n"),e("br")]),a._v(" "),e("img",{attrs:{src:s(290)}}),a._v(" "),e("p",[a._v("y arrastra todo las fuentes descomprimidas al recuadro, no arrastrar la carpeta, unicamente los archivos "),e("code",[a._v(".ttf")])]),a._v(" "),e("br"),a._v(" "),e("img",{attrs:{src:s(291)}}),a._v(" "),e("h3",{attrs:{id:"_4-configurar-terminal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-configurar-terminal"}},[a._v("#")]),a._v(" 4) Configurar terminal")]),a._v(" "),e("p",[a._v("Abrir una carpeta y pegar la siguiente ruta:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("%LOCALAPPDATA%\\Packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\LocalState\\settings.json\n")])])]),e("p",[a._v("una vez abierto el archivo, escribir la siguiente configuracion en "),e("code",[a._v("profiles > defaults")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"profiles": \n{\n    "defaults": \n    {\n        "font": \n        {\n            "face": "Hack Nerd Font Mono",\n            "size": 11.0\n        },\n        "opacity": 85\n    }\n    ...\n}\n')])])]),e("p",[a._v("ahora en visual studio code para instalar el tema, damos "),e("code",[a._v("ctrl + shit + p")]),a._v(" y escribimos "),e("code",[a._v("settings json")]),a._v(" abrimos el archivo json y pegamos:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"terminal.integrated.fontFamily": "Hack Nerd Font Mono"\n')])])]),e("h3",{attrs:{id:"_5-instalar-temas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-instalar-temas"}},[a._v("#")]),a._v(" 5) Instalar temas")]),a._v(" "),e("p",[a._v("Una vez realizado todo, ya solo queda instalar los temas para la terminal")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Get-PoshThemes\n")])])]),e("h3",{attrs:{id:"_6-agregar-tema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-agregar-tema"}},[a._v("#")]),a._v(" 6) Agregar tema")]),a._v(" "),e("p",[a._v("Debemos agregar el tema a la configuracion creada de la terminal, abrimos el archivo con el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("notepad $PROFILE\n")])])]),e("p",[a._v("Se abrira un block de notas vacio y agregamos la siguiente linea y guardamos:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\\nombredeltema.omp.json" | Invoke-Expression\n\n')])])]),e("p",[a._v("donde dice "),e("code",[a._v("nombredeltema")]),a._v(" reemplazarlo por el nombre elegido que quieras al instalar los temas\n"),e("br")]),a._v(" "),e("img",{attrs:{src:s(292)}})])}),[],!1,null,null,null);e.default=r.exports}}]);