#!/bin/bash

# Ruta donde se generarán los archivos
ruta="C:/Users/FraN_/Downloads/ACT_T4_FranRL"

# Prefijo del archivo
prefijo="ACT_4_"

# Sufijo del archivo
sufijo="_FranRL.html"

# Números de archivo desde 21 hasta 36
for i in {21..36}; do
    # Nombre del archivo
    nombre_archivo="${prefijo}${i}${sufijo}"

    # Ruta completa del archivo
    ruta_completa="${ruta}/${nombre_archivo}"

    # Contenido del archivo (puedes personalizarlo según tus necesidades)
    contenido='<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>'"${nombre_archivo}"'</title>
      </head>
      <body>
        
      </body>
      </html>'

    # Crear el archivo con el contenido
    echo "$contenido" > "$ruta_completa"

    echo "Archivo generado: $ruta_completa"
done
