# Prueba Técnica NodeJs

_Api que maneja control de usuarios (registro y login) y lectura de datos disponibles solo para usuarios logeados._


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Deberás clonar los datos del repositorio en tu dispositivo_

```
git clone https://github.com/Luis-Montesinos-Lopez/Prueba-Tecnica-NodeJS.git
```
_En este caso, el archivo .env no se encuentra en el .gitignore para que pueda ser utilizado con esa configuración._

### Instalación 🔧

_Sigue estos pasos para instalar las dependencias y ejecutar el proyecto:_

_Instala Node.js (versión >= 16) y npm o yarn._

_Navega a la carpeta del proyecto:_
```
cd Prueba-Tecnica-NodeJS
```
_Instala las dependencias:_
```
 npm install o yarn
 ```

_Inicia el servidor:_ 
```
npm start o yarn start
```

_El servidor se iniciará en el puerto 3000 por defecto._

_Puedes probar la API usando herramientas como  Postman o Thunder Client._

_Para usar las rutas definidas en Postman solo tienes que importar el archivo adjunto:_
```
Prueba-Tecnica-NodeJs.postman_collection.json
```

_Para registrar un usuario, envía una solicitud POST a la ruta /api/users con los datos del usuario en el cuerpo de la solicitud._
```
http://localhost:3000/users
```

_Para iniciar sesión, envía una solicitud POST a la ruta /api/login con el email y la contraseña en el cuerpo de la solicitud._
```
http://localhost:3000/users/login
```

_Para obtener datos, envía una solicitud GET a la ruta /api/data con el token de acceso en la cabecera Authorization._
```
http://localhost:3000/datas
```

_Si lo deseas, puedes ejecutar las rutas en swagger. Tan solo tienes que usar la siguiente URL en tu navegador cuando inicies la API:_
```
localhost:3000/api-docs
```

## Construido con 🛠️

_El proyecto ha sido desarrollado con las siguientes herramientas:_

* _Node.js (versión >= 16)_
* _Express (framework web)_
* _SQLite (base de datos)_


## Autor ✒️

* **Luis Montesinos López**  - [Luis-Montesinos-Lopez](https://github.com/Luis-Montesinos-Lopez)
 


## Agradecimientos 🎁

* Muchas gracias a Enerclic por la oportunidad de poder realizar el proyecto 📢



---
⌨️ con ❤️ por [Luis-Montesinos-Lopez](https://github.com/Luis-Montesinos-Lopez) 😊