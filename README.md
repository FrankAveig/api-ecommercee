# Api-ecoommerce-ucamp

**TABLA DE CONTENIDO**

1.-[Descripción](Descripción)

2.-[Dependencias](#Dependencias)

2.-[Documentación para uso de la api](#Documentación-para-uso-de-la-api)

## Descripción
Esta es una api desarrollada para ser utilizada en un e-commerce con una base de datos no relacional en especifico MongoDb, los modelos con los que cuenta la api para crear las colecciones son :
- Usuario
- Producto
- Venta

## Dependencias
Si se desea hacer uso del codigo de la api, para su correcto funcionamiento se deben instalar las siguientes dependencias 

    npm install express 
    npm install dotenv
    npm install cors
    npm install mongoose  
    npm install jsonwebtoken
    npm install express-jwt
    npm install mongoose-unique-validator

## Documentacion para uso de la api
### URL Base
`https://api-ecommercee.vercel.app/v1`
### EndPoints User
---
#### Registro de usuarios
> Este recurso permite crear un nuevo usuario 
<details>
  <summary>Ver información</summary>

```http
  POST /user/
```

###### Body Request
```json
Formato Json
{
	"name": "Frank",
	"surname": "Aveiga",
	"mail": "prueba@prueba.com",
	"city":"Guayaquil",
	"age": 29,
	"password":"contrasena",
	"img": "url"
}
```
###### Response
```javascript
{
    "mensaje": "Usuario Creado",
    "detalles": {
        "idUser": "635cd92b96e01a1c9db455c1",
        "type": "customer",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2MzVjZDkyYjk2ZTAxYTFjOWRiNDU1YzEiLCJ0eXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NjcwMjkyOTN9.c7WNCjOeOmOWMxusie7zR18LLvo5nTm1s6eXirLC81c"
    }
}
```
</details>
	
---
#### Login de usuario
> Este recurso permite logear al usuario generando un token de autorización
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  POST /user/login
```

###### Body Request
```json
Formato Json
{
	"mail": "prueba@prueba.com",
	"password":"contrasena"
}
```

###### Response
```javascript
{
    "mensaje": "Login correcto",
    "detalles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2MzVjZDkyYjk2ZTAxYTFjOWRiNDU1YzEiLCJ0eXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NjcwMjk0ODF9.ZHq7vv26JHaIltYTU45JnOrPfUNGhiYRUIatKFnvSPU"
}
```
</details>

---
#### Obtener todos los usuarios
```http
  GET /user/getAll
```
> Este recurso devuelve los datos de los usuarios. **Solo podras usar esta ruta cuando este estes logeado como administrador** 

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de admin)  |

###### Response
```javascript
"mensaje": "Usuarios encontrados",
    "detalles": [
        {
             "_id": "635cd92b96e01a1c9db455c1",
            "name": "Frank",
            "mail": "prueba@prueba.com",
            "age": 29,
            "type": "customer",
            "img": "url"
        },
        {
            "_id": "635cd92b96e01a1c9db455c1",
            "name": "Frank",
            "mail": "prueba@prueba.com",
            "age": 29,
            "type": "customer",
            "img": "url"
        }
    ]
}
```
---
#### Obtener los datos del usuario logeado
```http
  GET /user/
```
> Este recurso devuelve los datos del usuario logead. **Solo podras usar esta ruta cuando estes logeado ya que tendras el token de login** 

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token)  |

###### Response
```javascript
"mensaje": "Usuarios encontrados",
    "detalles": [
        {
             "_id": "635cd92b96e01a1c9db455c1",
            "name": "Frank",
            "mail": "prueba@prueba.com",
            "age": 29,
            "type": "customer",
            "img": "url"
        }
    ]
}
```
---
#### Obtener los datos de un usuario a través de uno de sus atributos 
```http
  GET /user/filtrar
```
> Este recurso devuelve los datos de los usuarios que cumplan con los parametros a travez del body. **Solo podras usar esta ruta cuando estes logeado como administrador** 

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |

###### Body Request (puedes buscar con cualquier atributo en esta ocación lo haremos con la edad)
```json
Formato Json
{
	"age": 29,
}
```

###### Response
```javascript
"mensaje": "Usuarios encontrados",
    "detalles": [
        {
             "_id": "635cd92b96e01a1c9db455c1",
            "name": "Frank",
            "mail": "prueba@prueba.com",
            "age": 29,
            "type": "customer",
            "img": "url"
        },
         {
             "_id": "635cd92b96e0qwe4rqwerr4",
            "name": "Frank",
            "mail": "prueba@prueba.com",
            "age": 29,
            "type": "customer",
            "img": "url"
        }
    ]
}
```
---
#### Obtener los de un usuario a través de un ID 
```http
  GET /user/:id
  Ejemplo /user/635cd92b96e01a1c9db455c1    
```
> Este recurso devuelve los datos de un usuario buscado por su ID pasado a través de params. **Solo podras usar esta ruta cuando estes logeado como administrador** 

###### Query Params
| KEY  |VALUE   |
| ------------ | ------------ |
| | 635cd92b96e01a1c9db455c1    |



###### Response
```javascript
"mensaje": "Usuarios encontrados",
    "detalles": [
        {
             "_id": "635cd92b96e01a1c9db455c1",
              "name": "Frank",
              "surname": "Aveiga",
              "mail": "prueba@prueba.com",
              "city": "Guayaquil",
              "age": 29,
              "type": "customer",
              "img": "url",
              "salt": "aa870aaeb1bfd6c62419180d0a6802d5",
              "password": "d7b242e696",
        }
    ]
}
```
