# Prueba Técnica NodeJs

_API que maneja control de usuarios (registro y login) y lectura de datos disponibles solo para usuarios logeados._


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

## Prueba 💻

### Endpoints  [<img width="30" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman"/>](https://www.postman.com/)



_Puedes probar la API usando herramientas como  Postman o Thunder Client._

_Para usar las rutas definidas en Postman solo tienes que importar el archivo adjunto._
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

_Para obtener datos, envía una solicitud GET a la ruta /api/datas con el token de acceso en la cabecera Authorization._
```
http://localhost:3000/datas
```

### Swagger  [<img width="30" src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" alt="Swagger" title="Swagger"/>](https://swagger.io/)



_Si lo deseas, puedes ejecutar las rutas en swagger. Tan solo tienes que usar la siguiente URL en tu navegador cuando inicies la API._
```
localhost:3000/api-docs
```

## Docker  [<img width="30" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" title="Docker"/>](https://www.docker.com/)



### Requisitos previos
_Se ha añadido una configuración para el uso en Docker de la API. Para usarla asegúrate de tener Docker instalado en tu sistema. Si aún no lo tienes, puedes descargarlo desde el sitio oficial de Docker._
```
https://www.docker.com/
```
### Construye la imagen de Docker
_Navega al directorio raíz del proyecto y ejecuta el siguiente código._
```
docker build -t prueba-tecnica-nodejs
```

### Crea y ejecuta el contenedor
_Crea un contendor basado en la imagen que acabas de construir._

```
docker run -p 3000:3000 --name prueba-tecnica-container prueba-tecnica-nodejs
```
### Accede a tu API
_Tu API debería estar disponible en ```localhost://3000```_

## Construido con 🛠️

_El proyecto ha sido desarrollado con las siguientes herramientas:_

* _Node.js (versión >= 16)_ [<img width="30" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>](https://nodejs.org/en/)


* _Express (framework web)_ [<img width="30" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>](https://expressjs.com/)



* _SQLite (base de datos)_ [<img width="30" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/82df4543-236b-4e45-9604-5434e3faab17" alt="SQLite" title="SQLite"/>](https://www.sqlite.org/)



## Autor ✒️

* **Luis Montesinos López**  - [Luis-Montesinos-Lopez](https://github.com/Luis-Montesinos-Lopez)
 


## Agradecimientos 🎁

* Muchas gracias a Enerclic por la oportunidad de poder realizar el proyecto 📢



---
⌨️ con ❤️ por [Luis-Montesinos-Lopez](https://github.com/Luis-Montesinos-Lopez) 😊