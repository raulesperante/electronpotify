# Base electron

## Servidor
### Para Desarrollar levantar el contenedor de docker con la API Rest
- Crear la base de datos </br>
- ```CREATE DATABASE "testBackend"``` </br>
- Construir la imagen y levantar el contenedor </br>
- ```cd docker-api``` </br>
- ```docker-compose build``` </br>
- ```docker-compose up``` </br>

## Cliente aplicación de escritorio
### Electron trabaja sin docker, teniendo instalado node.js en el sistema operativo
1. Instalar las dependencias: ```npm install``` </br>
2. En una terminal ejecutar: ```npm run watch``` para transpilar el código javascript <br/>
3. En otra termnal ejecutar: ```npm run init``` para lanzar la Electron App

## Empaquetar (Generar el instalador)
```npm run make```
Genera el instalador dentro de la carpeta /out
Por defecto ese comando compila para la arquitectura donde ejecutamos el comando
Leer la documentación para generar el instalador para otros Sistemas Operativos
https://www.electronforge.io/

En Linux hay que tener instalada la siguiente dependencia
```sudo apt install rpm``` (obligario si estamos en debian para generar el instalador .rpm)