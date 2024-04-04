# Prueba Técnica NodeJs

_API que maneja control de usuarios (registro y login) y lectura de datos disponibles solo para usuarios logeados._


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento._


### Pre-requisitos 📋

_Deberás clonar los datos del repositorio en tu dispositivo_

```
git clone https://github.com/Luis-Montesinos-Lopez/Prueba-Tecnica-NodeJS.git
```
_En este caso, el archivo .env no se encuentra en el .gitignore para que pueda ser utilizado con esa configuración._

### Instalación 🔧

_Sigue estos pasos para instalar las dependencias y ejecutar el proyecto:_

_Instala Node.js (versión >= 16) y npm o yarn._


[¡¡Descarga NodeJS aquí!!](https://nodejs.org/en/)


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

_Para usar las rutas definidas en Postman solo tienes que importar el archivo adjunto, así como el archivo donde están definidas las variables de entorno._
```
Prueba-Tecnica-NodeJs.postman_collection.json
```

_Importamos también las variables de entorno_
´´´
PruebaNodeJS.postman_environment.json
´´´

#### **¡IMPORTANTE!**
_Asegúrate de tener instalado Postman-desktop-agent para poder acceder a las rutas desde localhost si usas la web de Postman._

#### Registro de Usuarios
_Para registrar un usuario, envía una solicitud POST a la ruta /api/v1/users con los datos del usuario en el cuerpo de la solicitud._
```
http://localhost:3000/api/v1/users
```
_O si estamos usando las variables de entorno_
´´´
http://{{server}}:{{port}}/api/v1/users
´´´

_Se ha configurado para que se deban rellenar todos los datos del usuario (nombre, email y password)._
_Además, el nombre solo puede contener letras._
_Solo se permiten emails válidos._
_La contraseña se encripta usando el módulo md5 para una mayor seguridad._

#### Login
_Para iniciar sesión, envía una solicitud POST a la ruta /api/v1/users/login con el email y la contraseña en el cuerpo de la solicitud._
```
http://localhost:3000/api/v1/users/login
```
_O si estamos usando las variables de entorno_
´´´
http://{{server}}:{{port}}/api/v1/users/login
´´´
_Tras comprobar el email y la contraseña, si todo ha ido correctamente, se devolverá el token firmado con la clave secreta que se_ _encuentra en el archivo .env._
_Este token deberá ser introducido en la sección Authorization del header en la siguiente ruta._

#### Acceso a los datos
_Para obtener datos, envía una solicitud GET a la ruta /api/v1/datas con el token de acceso en el header Authorization._
```
http://localhost:3000/api/v1/datas
```
_O si estamos usando las variables de entorno_
´´´
http://{{server}}:{{port}}/api/v1/datas
´´´
_Tras verificar el token y comprobar la existencia del usuario cuya información contiene, si todo es correcto, se procederá a_
_mostrar los datos ordenados jerárquicamente donde primero se muestra el elemento que no tiene padre y, anidados en su interior,_
_sus hijos y los hijos de los mismos._

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
docker build -t prueba-tecnica-nodejs .
```
#### **¡IMPORTANTE!**
_Asegúrate de tener iniciado docker antes de realizar la construcción de la imagen._


### Crea y ejecuta el contenedor
_Crea un contendor basado en la imagen que acabas de construir._

```
docker run -p 3000:3000 --name prueba-tecnica-container prueba-tecnica-nodejs
```
### Accede a tu API
_Tu API debería estar disponible en ```localhost://3000```_

## Construido con 🛠️

_El proyecto ha sido desarrollado con las siguientes herramientas:_

* _Node.js [<img width="30" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>](https://nodejs.org/en/)_ 


* _Express [<img width="30" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>](https://expressjs.com/)_ 



* _SQLite  [<img width="30" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/82df4543-236b-4e45-9604-5434e3faab17" alt="SQLite" title="SQLite"/>](https://www.sqlite.org/)_



## Autor ✒️

* **Luis Montesinos López**  - [Luis-Montesinos-Lopez](https://github.com/Luis-Montesinos-Lopez)
 


## Agradecimientos 🎁

* Muchas gracias a Enerclic por la oportunidad de poder realizar el proyecto 📢



---
⌨️ con ❤️ por [Luis-Montesinos-Lopez](https://github.com/Luis-Montesinos-Lopez) 😊