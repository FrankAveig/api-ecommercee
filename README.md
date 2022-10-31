# Api-ecoommerce-ucamp

**TABLA DE CONTENIDO**

1.-[Descripción](#Descripción)

2.-[Dependencias](#Dependencias)

3.-[Documentación para uso de la API](#Documentacion-para-uso-de-la-api)

4.-[Variables-de-entorno](###codigo)

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

## Documentacion para uso de la API
### URL Base
`https://api-ecommercee.vercel.app/v1`


### **END-POINTS USER**

<details>
	
  <summary>Ver información</summary>
	
---
#### Registro de usuarios
> Este recurso permite crear un nuevo usuario 
<details>
  <summary>Ver información</summary>
	
###### End point
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
> Este recurso devuelve los datos de los usuarios. **Solo podras usar esta ruta cuando este estes logeado como administrador** 
<details>
  <summary>Ver información</summary>
	
###### End point	
```http
  GET /user/getAll
```

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
</details>	
	
---
	
	
#### Obtener los datos del usuario logeado
> Este recurso devuelve los datos del usuario logead. **Solo podras usar esta ruta cuando estes logeado ya que tendras el token de login** 

<details>
  <summary>Ver información</summary>

###### End point
```http
  -POST /user/
```



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
</details>

---
	
#### Obtener los datos de un usuario a través de uno de sus atributos 
> Este recurso devuelve los datos de los usuarios que cumplan con los parametros a travez del body. **Solo podras usar esta ruta cuando estes logeado como administrador** 
	
<details>
 <summary>Ver información</summary>
	
###### End point
	
```http
  GET /user/filtrar
```


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
</details>
	
---
	
#### Obtener los de un usuario a través de un ID 
> Este recurso devuelve los datos de un usuario buscado por su ID pasado a través de params. **Solo podras usar esta ruta cuando estes logeado como administrador** 

<details>
 <summary>Ver información</summary>
	
###### End point
```http
  GET /user/:id
  Ejemplo /user/635cd92b96e01a1c9db455c1    
```

######  Params
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

</details>
	
---

#### Actualizar la información de los usuarios encontradoa travez del ID de usuario
> Este recurso busca un usuario a travez en un id pasado por parametro y actualiza los valores pasados por el body. **Solo podras usar esta ruta cuando estes logeado como administrador ya que tendras el token de admin** 

<details>
  <summary>Ver información</summary>

###### End point
```http
  -PUT /user/:ID
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |

######  Params
| KEY  |VALUE   |
| ------------ | ------------ |
| | 635cd92b96e01a1c9db455c1    |

###### Body Request
```json
Formato Json
{
	"name": "Dario",
	"surname": "Dueñas"
}
```


###### Response
```javascript
{
    "mensaje": "Usuario actualizado",
    "detalles": {
        "_id": "635cd92b96e01a1c9db455c1",
        "name": "Dario",
        "surname": "Dueñas",
        "mail": "prueba@prueba.com",
        "city": "Guayaquil",
        "age": 29,
        "type": "customer",
        "img": "url",
    }
}
```
</details>

---

#### Elimina un usuario por el Id del usuario
> Este recurso elimina un usuario buscandolo por el ID pasado por parametro. **Solo podras usar esta ruta cuando estes logeado como administrador ya que tendras el token de admin** 

<details>
  <summary>Ver información</summary>

###### End point
```http
  DELETE /user/delete/:id
  Ejemplo  /user/delete/635cd92b96e01a1c9db455c1
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |

######  Params
| KEY  |VALUE   |
| ------------ | ------------ |
| | 635cd92b96e01a1c9db455c1    |



###### Response
```javascript
{
    "mensaje": "Usuario eliminado",
    "detalles": {
        "_id": "635cd92b96e01a1c9db455c1",
        "name": "Dario",
        "surname": "Dueñas",
        "mail": "prueba@prueba.com",
        "city": "Guayaquil",
        "age": 29,
        "type": "customer",
        "img": "url",
    }
}
```


</details>

---

#### Eliminar usuarios a travez de una busqueda de sus propiedades
> Este recurso elimina los usuario que tengan la propiedad que se pasa por el body **Solo podras usar esta ruta cuando estes logeado como administrador ya que tendras el token de admin** 

<details>
  <summary>Ver información</summary>

###### End point
```http
   DELETE /user/
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |



###### Body Request
```json
Formato Json
{
	"age": 29
}
```


###### Response
```javascript
{
    "mensaje": "Usuarios eliminados",
    "detalles": {
        "acknowledged": true,
        "deletedCount": 2
    }
}
```
</details>

---


</details>

</details>



### **END-POINTS PRODUCTOS**

<details>
	
  <summary>Ver información</summary>
  
  ---
#### Registro de nuevo producto
> Este recurso permite crear un nuevo producto,**Solo podras usar esta ruta cuando tengas un token de admin** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  POST /product/
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |

###### Body Request
```json
Formato Json
{
	"name": "Producto 1",
	"description": "Aqui escribir una descripción",
	"img": "url",
	"price": 200,
	"age": 29,

}
```
###### Response
```javascript
{
    "mensaje": "Producto creado",
    "detalles": {
        "name": "Producto 1",
        "description": "Aqui escribir una descripción",
        "img": "url",
        "price": 200,
        "uploader": {
            "_id": "635da9cd93c3906e28f08a27",
            "name": "Frank"
        },
        "_id": "635daa1293c3906e28f08a2e",
        "__v": 0
    }
}
```
</details>

---

#### Ver todos los productos creados
> Este recurso permite visualizar todos los productos que han sido creados,**Solo podras usar esta ruta cuando tengas un token de admin** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  GET /product/getAll
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |



###### Response
```javascript
{
    "mensaje": "Productos encontrados",
    "detalles": [
        {
            "_id": "635c150ac715677c436d6aa8",
            "name": "Iphoneee",
            "description": "telefono",
            "img": "url",
            "price": 1500,
            "uploader": {
                "_id": "635bf75b4e96275e9ddc01c7"
            },
            "__v": 0
        },
        {
            "_id": "635c8d1c3d5d7101e62c04e4",
            "name": "Iphoneee",
            "description": "telefono",
            "img": "url",
            "price": 1500,
            "uploader": {
                "_id": "635bf75b4e96275e9ddc01c7"
            },
            "__v": 0
        },
        {
            "_id": "635daa1293c3906e28f08a2e",
            "name": "Producto 1",
            "description": "Aqui escribir una descripción",
            "img": "url",
            "price": 200,
            "uploader": {
                "_id": "635da9cd93c3906e28f08a27"
            },
            "__v": 0
        }
    ]
}
```
</details>

---

#### Ver los productos que el usuario logeado he creado
> Este recurso permite visualizar todos los productos que el administrador logeado ha creado,**Solo podras usar esta ruta cuando tengas un token de admin** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  GET /product/misPeliculas
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |



###### Response
```javascript
{
    "mensaje": "Productos encontradas",
    "detalles": [
        {
            "_id": "635c150ac715677c436d6aa8",
            "name": "Iphoneee",
            "description": "telefono",
            "img": url",
            "price": 1500,
            "uploader": {
                "_id": "635bf75b4e96275e9ddc01c7"
            },
            "__v": 0
        },
        {
            "_id": "635c8d1c3d5d7101e62c04e4",
            "name": "Iphoneee",
            "description": "telefono",
            "img": "url",
            "price": 1500,
            "uploader": {
                "_id": "635bf75b4e96275e9ddc01c7"
            },
            "__v": 0
        }
    ]
}
```
</details>

---

#### Actualizar un producto por el id
> Este recurso permite eliminar un producto pasandole el id como referncia de que producto eliminar,**Solo podras usar esta ruta cuando tengas un token de admin** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  PUT /product/
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |

###### Body Request
```json
Formato Json
{
	"name": "Celular"
}
```


###### Response
```javascript
{
    "mensaje": "Producto actualizado",
    "detalles": {
        "_id": "635c8d1c3d5d7101e62c04e4",
        "name": "Celular",
        "description": "telefono",
        "img": "URL",
        "price": 1500,
        "uploader": {
            "_id": "635bf75b4e96275e9ddc01c7"
        },
        "__v": 0
    }
}
```
</details>

---

#### Eliminar un producto por id
> Este recurso permite eliminar un producto pasandole el id como referncia de que producto eliminar,**Solo podras usar esta ruta cuando tengas un token de admin** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  DELETE /product/
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |



###### Response
```javascript
{
    "mensaje": "Producto eliminado",
    "detalles": {
        "_id": "635c150ac715677c436d6aa8",
        "name": "Iphoneee",
        "description": "telefono",
        "img": "URL",
        "price": 1500,
        "uploader": "635bf75b4e96275e9ddc01c7",
        "__v": 0
    }
}
```
</details>

---

</details>

### **END-POINTS VENTA-COMPRA**

<details>
	
  <summary>Ver información</summary>
  
  ---
  
#### Crear una nueva compra
> Este recurso permite guardar una compra ,**Solo podras usar esta ruta cuando tengas un token** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  POST /sale/
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token)  |

###### Body Request
```json
Formato Json
{
	"total": 300,
    "products":["635daa1293c3906e28f08a2e","635daa1293c3906e28f08a2e"]
}
```


###### Response
```javascript
{
    "mensaje": "Venta creada",
    "detalles": {
        "total": 300,
        "buyer": {
            "_id": "635bf75b4e96275e9ddc01c7",
            "name": "asd"
        },
        "products": [
            {
                "_id": "635daa1293c3906e28f08a2e",
                "name": "Producto 1",
                "price": 200
            },
            {
                "_id": "635daa1293c3906e28f08a2e",
                "name": "Producto 1",
                "price": 200
            }
        ],
        "state": "solicitado",
        "_id": "635f55e3f68de0cca8099b7a",
        "createdAt": "2022-10-31T04:58:11.893Z",
        "updatedAt": "2022-10-31T04:58:11.893Z",
        "__v": 0
    }
}

```
</details>

---
  
#### Ver todas las compras
> Este recurso permite visualizar todas las compras realizadas por todos los usuarios ,**Solo podras usar esta ruta cuando tengas un token de administrador** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  GET /sale/getAll
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |



###### Response
```javascript
{
    "mensaje": "Ventas encontradas",
    "detalles": [
        {
            "_id": "635f55e3f68de0cca8099b7a",
            "total": 300,
            "buyer": {
                "_id": "635bf75b4e96275e9ddc01c7",
                "name": "asd"
            },
            "products": [
                {
                    "_id": "635daa1293c3906e28f08a2e",
                    "name": "Producto 1",
                    "price": 200
                },
                {
                    "_id": "635daa1293c3906e28f08a2e",
                    "name": "Producto 1",
                    "price": 200
                }
            ],
            "state": "solicitado",
            "createdAt": "2022-10-31T04:58:11.893Z",
            "updatedAt": "2022-10-31T04:58:11.893Z",
            "__v": 0
        },
        {
            "_id": "635f598e51ecc4923d2f224a",
            "total": 300,
            "buyer": {
                "_id": "635bf75b4e96275e9ddc01c7",
                "name": "asd"
            },
            "products": [
                {
                    "_id": "635daa1293c3906e28f08a2e",
                    "name": "Producto 1",
                    "price": 200
                },
                {
                    "_id": "635daa1293c3906e28f08a2e",
                    "name": "Producto 1",
                    "price": 200
                }
            ],
            "state": "solicitado",
            "createdAt": "2022-10-31T04:58:11.893Z",
            "updatedAt": "2022-10-31T04:58:11.893Z",
            "__v": 0
        }
    ]
}
    
```
</details>

---

#### Ver las compras del usuario logeado
> Este recurso permite visualizar todas las compras realizadas por todos los usuarios ,**Solo podras usar esta ruta cuando tengas un token** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  GET /sale/compras
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token )  |



###### Response
```javascript
{
    "mensaje": "Comprsa encontradas",
    "detalles": [
        {
            "_id": "635f55e3f68de0cca8099b7a",
            "total": 300,
            "buyer": "635bf75b4e96275e9ddc01c7",
            "products": [
                {
                    "_id": "635daa1293c3906e28f08a2e",
                    "name": "Producto 1",
                    "price": 200
                },
                {
                    "_id": "635daa1293c3906e28f08a2e",
                    "name": "Producto 1",
                    "price": 200
                }
            ],
            "state": "solicitado",
            "createdAt": "2022-10-31T04:58:11.893Z",
            "updatedAt": "2022-10-31T04:58:11.893Z",
            "__v": 0
        },
        {
            "_id": "635f598e51ecc4923d2f224a",
            "total": 300,
            "buyer": "635bf75b4e96275e9ddc01c7",
            "products": [
                {
                    "_id": "635daa1293c3906e28f08a2e",
                    "name": "Producto 1",
                    "price": 200
                },
                {
                    "_id": "635daa1293c3906e28f08a2e",
                    "name": "Producto 1",
                    "price": 200
                }
            ],
            "state": "solicitado",
            "createdAt": "2022-10-31T04:58:11.893Z",
            "updatedAt": "2022-10-31T04:58:11.893Z",
            "__v": 0
        }
    ]
}
    
```
 

</details>

---

#### Actualizar el estado de la compra
> Este recurso permite actualizar el estado de la compra ,**Solo podras usar esta ruta cuando tengas un token de administrador** 
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  POST /sale/estado/:id
  Ejemplo  /sale/estado/635f55e3f68de0cca8099b7a
```

###### Header Request
| KEY  |VALUE   |
| ------------ | ------------ |
| Authorization| Bearer (token de administrador)  |


###### Params
| KEY  |VALUE   |
| ------------ | ------------ |
| | 635f55e3f68de0cca8099b7a   |

###### Body Request
```json
Formato Json
{
	"state":"enviado"
}
```


###### Response
```javascript
{
    "mensaje": "Estado de la venta actualizado",
    "detalles": {
        "_id": "635f55e3f68de0cca8099b7a",
        "total": 300,
        "buyer": "635bf75b4e96275e9ddc01c7",
        "products": [
            "635daa1293c3906e28f08a2e",
            "635daa1293c3906e28f08a2e"
        ],
        "state": "enviado",
        "createdAt": "2022-10-31T04:58:11.893Z",
        "updatedAt": "2022-10-31T07:35:35.424Z",
        "__v": 0
    }
}

```
</details>

---

</details>
	
## Documentación del código 

 ### **Organización del codigo**
<details>
  <summary>Ver información</summary>
  
  El código está organizado por carpetas y un archivo index.js principal además de un archivo de variables de entorno
  
  ![Image text](https://i.ibb.co/bm9Kdyk/Organizc.png)
  
 </details>
 
 ### **Codigo**
<details>
<summary>Ver información</summary>

###


  
<details>

<summary>:file_folder: Models</summary>

###
   
   
<details>

<summary> >  :spiral_notepad: index.js</summary>

 ###

```javascript
const User = require("./User.model");
const Product = require("./Product.model");
const Sale = require("./Sale.model");

module.exports = {
  User,
  Product,
  Sale
};

```

</details>

<details>

 <summary> >  :spiral_notepad: User.model.js </summary>
 
  ###
  
```javascript

const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    surname:{
        type:String,
        required: true,
    },
    mail:{
        type: String,
        required:true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'email invalido'],
    },
    city:{
        type:String,
    },
    age:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        enum:[
            'customer',
            'admin'
        ],
        default:'customer',
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:'wwww.hola.com'
    },
    salt:{
        type:String,
    }
})

/* A plugin that validates the uniqueness of a field. */
UserSchema.plugin(uniqueValidator)

/* Encrypting the password. */
UserSchema.methods.encryptString = function(stringToEncript,salt){
    return crypto.pbkdf2Sync(stringToEncript,salt,10000,5,'sha512').toString('hex');
}


UserSchema.methods.hashPassword = function(password){
  /* Generating a random string of 16 characters. */
    this.salt = crypto.randomBytes(16).toString('hex');
    /* Assigning the value of the function `encryptString` to the property `password` of the object
    `this`. */
    this.password = this.encryptString(password,this.salt)
}

/* Verifying the password. */
UserSchema.methods.verifyPassword = function(password){
    return this.encryptString(password,this.salt) === this.password;
}

/* Generating a token. */
UserSchema.methods.generateJWT = function(){
    return jwt.sign({idUser: this._id,type:this.type},process.env.SECRET)
}

/* Creating a token. */
UserSchema.methods.onSingGenerateJWT = function(){
    return{
        idUser: this._id,
        type: this.type,
        token: this.generateJWT(),
    }
}

/* Creating a model called `User` with the schema `UserSchema` and the collection `collectionUser`. */
mongoose.model('User',UserSchema,'collectionUser')





```
 
</details>

<details>

 <summary> >  :spiral_notepad: Product.model.js </summary>
 
 ###

```javascript
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        default:"..."
    },
    img:{
        type:String,
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suzukijember.com%2Fgallery%2Fgambar_product%2F%3FMA&psig=AOvVaw29KG-vfntzAlLrOnBXKet4&ust=1667063204088000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNCNh8S0g_sCFQAAAAAdAAAAABAb'
    },
    price:{
        type:Number,
        required:true,
    },
    uploader: {
        type: mongoose.ObjectId,
        ref: "User",
      }

})

mongoose.model('Product', ProductSchema, "collectionProduct");


```

</details>

<details>

 <summary> >  :spiral_notepad: Sale.model.js </summary>
 
 ###
 ```javascript

const mongoose = require("mongoose");


const SaleSchema = new mongoose.Schema({
    
    total: {
      type: Number,
      required: true,
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "User",
    },
    products: {
      type: [
        {
          type: mongoose.ObjectId,
          ref: "Product",
        },
      ],
    },
    state:{
        type:String,
        enum:[
            'solicitado',
            'confirmado',
            'enviado'
        ],
        default:'solicitado',
        required:true,
    }
  },
  {
    timestamps: true,
  }
);

mongoose.model('Sale',SaleSchema,'collectionnSales');


```
 
 
</details>
   
</details>

<details>

<summary>:file_folder: Controllers</summary>

###

<details>

<summary> >  :spiral_notepad: index.js</summary>

 ###

```javascript
const {
    registro,
    verUsuarios,
    filtrarUsuarios,
    eliminarUsuarioPorId,
    eliminarUsuariosPorFiltro,
    actualizarUsuario,
    login,
    verInfoUsuario,
    verUsuario
  } = require("./User.controller");
  
  const{
    nuevoProducto,
    verProductos,
    eliminarProductoPorId,
    actualizarProductoPorId,
    verMisProductosCreados,
  } = require('./Product.controller')
  const{
    nuevaVenta,
    verVentas,
    filtrarVentasUsuario,
    actualizarEstadoId
  } = require('./Sale.controller')
  
  
  module.exports = {
    registro,
    verUsuarios,
    filtrarUsuarios,
    eliminarUsuarioPorId,
    eliminarUsuariosPorFiltro,
    actualizarUsuario,
    login,
    verInfoUsuario,
    verUsuario,
    nuevoProducto,
    verProductos,
    eliminarProductoPorId,
    actualizarProductoPorId,
    verMisProductosCreados,
    nuevaVenta,
    verVentas,
    filtrarVentasUsuario,
    actualizarEstadoId
  };

```

</details>

<details>

 <summary> >  :spiral_notepad: User.controlleer.js </summary>
 
  ###
  
```javascript

const mongoose = require('mongoose');
const User = mongoose.model('User');


 /* It creates a new user with the request body, hashes the password, and saves the user.*/
/**
 * It takes the password from the request body, deletes it from the request body, creates a new user
 * with the request body, hashes the password, saves the user, and returns a response.
 */
const registro = async (req,res) =>{
    try{

        const{password} = req.body;
        delete req.body.password;
        const user = new User(req.body)
        user.hashPassword(password);
        await user.save();
        
        return res.status(201).json({mensaje:'Usuario Creado',detalles: user.onSingGenerateJWT()})
    }catch(e){
        return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }

}

/**
 * a function that searches for a user with email
 * It takes the email and password from the request body, searches for a user with that email, if it
 * finds one, it checks if the password is correct, if it is, it returns a JWT token, if not, it
 * returns an error message.
 */
const login = async(req,res)=>{
    try {
        const{mail,password} = req.body;
        const user = await User.findOne({mail});

        if(!user){
            return res.status(400).json({mensaje:'error',detalles:'Usuario no encontrado'});
        }
        if(user.verifyPassword(password)){
            return res.status(200).json({mensaje:'Login correcto', detalles: user.generateJWT()})
        }

        return res.status(400).json({mensaje: 'Error', detalles:'Contraseña incorrecta'});
    } catch (e) {
        return res.status(400).json({mensaje:'Error',detalles:  e.message});
    }
};

/**
 * It returns a list of users, but only if the user is an admin.
 */
const verUsuarios = async (req, res) => {
    try {
      if (req.user.type !== "admin") {
        return res.status(400).json({mensaje: "Error",detalles: "No tienes permiso para ver esto",});
      }
      const usuarios = await User.find({},{
        name: true,
        surename: true,
        mail: true,
        age: true,
        type: true,
        img: true,
      });
      if (!usuarios.length)
        return res.status(404).json({ mensaje: "Error", detalles: "Colección vacía" });
      return res.status(200).json({ mensaje: "Usuarios encontrados", detalles: usuarios });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


/**
 * It returns a user if the user is an admin and the user exists
 */
  const verUsuario = async (req, res) => {
    try {
      if (req.user.type !== "admin") {
        return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
      }
      console.log(req.query)
      const usuario = await User.findById(req.params.id);
      if (!usuario)
        return res.status(404).json({ mensaje: "Error", detalles: "No existe este usuario" });
      return res.status(200).json({ mensaje: "Usuario encontrado", detalles: usuario });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };

/**
 * filtra el usuario dependiendo el parametro pasado por el body

 */
  const filtrarUsuarios = async (req, res) => {
    
    try {
        if (req.user.type !== "admin") {
            return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
          }
      const usuarios = await User.find(req.body);
      if (!usuarios.length)
        return res.status(404).json({ mensaje: "Error", detalles: "Usuarios no encontrados" });
      return res.status(200).json({ mensaje: "Usuarios encontrados", detalles: usuarios });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };

/**
 * It deletes a user from the database by ID.
 */
  const eliminarUsuarioPorId = async (req, res) => {
    try {
        if (req.user.type !== "admin") {
            return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
          }
      const  id  = req.params.id;
      if (id.length !== 24)
        return res.status(400).json({ mensaje: "Error", detalles: "ID no válido" });
      const usuario = await User.findById(id);
      if (!usuario)
        return res.status(404).json({ mensaje: "Error", detalles: "Usuario no encontrado" });
      const eliminado = await User.findByIdAndDelete(id);
      return res.status(200).json({ mensaje: "Usuario eliminado", detalles: eliminado });
    } catch (e) {
      return res.status(400).json({ mensaje: "Errorr", detalles: e.message });
    }
  };
  

/**
 * It deletes all users that match the filter in the request body
 */
  const eliminarUsuariosPorFiltro = async (req, res) => {
    try {
        if (req.user.type !== "admin") {
            return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
          }
      const eliminados = await User.deleteMany(req.body);
      return res
        .status(200)
        .json({ mensaje: "Usuarios eliminados", detalles: eliminados });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };
  
/**
 * It takes the id from the request params, and then updates the user with the id with the body of the
 * request.
 */
  const actualizarUsuario = async (req, res) => {
    try {
        if (req.user.type !== "admin") {
            return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
          }
      const { id } = req.params;
      const actualizado = await User.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json({ mensaje: "Usuario actualizado", detalles: actualizado });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };

 /**
  * It returns the user's information
  */
  const verInfoUsuario = async (req, res) => {
    try {
      const usuarioInfo = await User.findById(req.user.idUser, {name:1, mail:1,type:1,age:1, surename:1,img:1
      });
      if (!usuarioInfo)
      return res.status(404).json({ mensaje: "Error", detalles: "Usuario no encontrado" });
      return res.status(200).json({ mensaje: "Usuarios encontrados", detalles: usuarioInfo });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };

  module.exports = {
    registro,
    verUsuarios,
    verUsuario,
    filtrarUsuarios,
    eliminarUsuarioPorId,
    eliminarUsuariosPorFiltro,
    actualizarUsuario,
    verInfoUsuario,
    login,
  };



```
 
</details>

<details>

 <summary> >  :spiral_notepad: Product.controller.js </summary>
 
 ###

```javascript

const mongoose = require("mongoose");
const Product = mongoose.model("Product");

/**
 * "If the user is not an admin, return a 403 error. If the user is an admin, create a new product and
 * save it to the database."
 */
const nuevoProducto = async (req, res) => {
    try {
      if (req.user.type !== "admin") {
        return res.status(403).json({  mensaje: "Error",detalles: "Sólo un admin puede crear un nuevo producto",
          });
      }
      
      const producto = new Product({...req.body, uploader: req.user.idUser});
  
      const resp = await producto.save();
  
      return res.status(201).json({mensaje: "Producto creado",detalles: await resp.populate("uploader", "name",),
      });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


 /**
  * It's a function that returns a promise that resolves to an array of products.
  */
  const verProductos = async (req, res) => {
    try {
      const products = await Product.find().populate("uploader", "nombre");
      if (!products.length)
        return res.status(404).json({ mensaje: "Error", detalles: "Colección vacía" });
      return res.status(200).json({ mensaje: "Productos encontrados", detalles: products });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


/**
 * It returns a list of products created by the user who is logged in.
 * </code>
 */
  const verMisProductosCreados = async (req, res) => {
    try {
      if (req.user.type !== "admin") {
        return res.status(400).json({mensaje: "Error",detalles: "No tienes permiso para ver esto",});
      }
      
      const products = await Product.find({uploader: req.user.idUser}).populate("uploader", "nombre");
      if (!products.length)
        return res.status(404).json({ mensaje: "Error", detalles: "Esste usuario no ha creado productos" });
      return res.status(200).json({ mensaje: "Productos encontradas", detalles: products });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


/**
 * It deletes a product from the database by its id.
 */
  const eliminarProductoPorId = async (req, res) => {
    try {
       if (req.user.type !== "admin") {
            return res.status(400).json({mensaje: "Error",detalles: "No tienes permiso para ver esto",});
        }
      const { id } = req.params;
      if (id.length !== 24)
        return res.status(400).json({ mensaje: "Error", detalles: "ID no válido" });
      const products = await Product.findById(id);
      if (!products)
        return res.status(404).json({ mensaje: "Error", detalles: "Producto no encontrado" });
      const eliminado = await Product.findByIdAndDelete(id);
      return res.status(200).json({ mensaje: "Producto eliminado", detalles: eliminado });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


/**
 * It takes the id of a product, and updates the product with the new data.
 */
const actualizarProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizado = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).populate("uploader", "nombre");
    return res
      .status(200)
      .json({ mensaje: "Producto actualizado", detalles: actualizado });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

module.exports = {
    nuevoProducto,
    verProductos,
    eliminarProductoPorId,
    actualizarProductoPorId,
    verMisProductosCreados,
};


```

</details>

<details>

 <summary> >  :spiral_notepad: Sale.model.js </summary>
 
 ###
 ```javascript

const mongoose = require("mongoose");
const Sale = mongoose.model("Sale");


/**
 * It creates a new sale, populates the products and buyer fields, and returns the populated sale.
 */
const nuevaVenta = async (req, res) => {
  try {
    if (req.user.type !== "admin") {
        return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
      }
    const sales = new Sale({ ...req.body, buyer: req.user.idUser });

    const resp = await sales.save();

    return res.status(201).json({
      mensaje: "Venta creada",
      detalles: await (await resp.populate({path:'products',select:{name:true,price:true}})).populate("buyer", "name")
    });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};


/**
 * It returns all the sales in the database, with the buyer's name, the product's name, price and the
 * uploader's name.
 * </code>

 */
const verVentas = async (req, res) => {
  try {
    if (req.user.type !== "admin") {
        return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
      }
    const sales = await Sale.find()
      .populate("buyer", "name")
      .populate({
        path: "products",
        select: {
          name: true,
          price: true,
        }}); 

    if (!sales.length)
      return res
        .status(404)
        .json({ mensaje: "Error", detalles: "Colección vacía" });
    return res
      .status(200)
      .json({ mensaje: "Ventas encontradas", detalles: sales });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};


/**
 * It returns all the sales of a user, and the products that were sold in each sale.
 * </code>
 */
const filtrarVentasUsuario = async (req, res) => {
    
    try {
      
          const buyer = req.user.idUser
      const compras = await Sale.find({buyer}).populate({ path: "products",
      select: {
        name: true,
        price: true,
      }});
      if (!compras.length)
        return res.status(404).json({ mensaje: "Error", detalles: "compras no encontradas" });
      return res.status(200).json({ mensaje: "Compras encontradas", detalles: compras });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  }



  /**
   * It takes the id of the sale and the state of the sale from the body of the request and updates the
   * state of the sale in the database.
   * </code>

   */
  const actualizarEstadoId = async (req, res) => {
    if (req.user.type !== "admin") {
      return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
    }
    body = req.body.state
    console.log(body)

    if(body === "confirmado" || body === "solicitado" || body === "enviado"){
      try {
        const { id } = req.params;
        
        const actualizado = await Sale.findByIdAndUpdate(
          id,
          { $set: {state : req.body.state }},
          { new: true }
        );
        return res
          .status(200)
          .json({ mensaje: "Estado de la venta actualizado", detalles: actualizado });
      } catch (e) {
        return res.status(400).json({ mensaje: "Error", detalles: e.message });
      }
    }

    return res.status(400).json({mensaje: "Error", detalles: "Estado no existente", hola:body});
    
  };


module.exports = {
  nuevaVenta,
  filtrarVentasUsuario,
  verVentas,
  actualizarEstadoId
};


```
 
 
</details>





</details>

<details>

<summary>:file_folder: Middelwares</summary>

 ###

<details>

 <summary> >  :spiral_notepad: auth.js </summary>
 
 ###
 
 ```javascript

const { expressjwt: jwt } = require("express-jwt");

/**
 * If the authorization header is present, split it into an array of two elements, the first being the
 * type of authorization and the second being the token. If the type is Bearer or Token, return the
 * token. Otherwise, return null.
 */
const getToken = (req) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return null;
  }

  const [type, token] = authorization.split(" ");

  return type === "Bearer" || type === "Token" ? token : null;
};

/* Using the express-jwt library to create a middleware function that will be used to authenticate the user. */
const auth = jwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  requestProperty: "user",
  getToken,
});


module.exports = auth;


```
 
 
 
 </details>
 

</details>

<details>

<summary>:file_folder: Routes</summary>

###

<details>
<summary> > :spiral_notepad: index.js </summary>
###

 ```javascript

const express = require("express");
const router = express.Router();
const userRouter = require("./User.routes");
const productRouter = require("./Proucts.routes");
const saleRouter = require("./Sales.routes");


router.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to API!</h1>
    `);
});

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/sale", saleRouter);

module.exports = router;


```

</details>

<details>
<summary> > :spiral_notepad: User.routes.js </summary>

###


 ```javascript

//! 1.- Importar express & Middleware
const express = require("express");
const auth = require("../middleware/auth");

//! 2.- Instanciar enrutador
const router = express.Router();

//! 3.- Importar controladores
const {
  registro,
  verUsuarios,
  filtrarUsuarios,
  eliminarUsuarioPorId,
  eliminarUsuariosPorFiltro,
  actualizarUsuario,
  login,
  verInfoUsuario,
  verUsuario,
} = require("../controllers");

//! 4.- Declaramos las rutas
router.post("/", registro);
router.post("/login", login);
// devuvelve los datos de un usuario en especifico siempre y cuando este este logeado o sea administrador ya que recibe el id a travez del token
router.get("/", auth, verInfoUsuario);
// devuelve todos los usuarios
router.get("/getAll", auth, verUsuarios);
// filtra los usuarios por un parametro pasado por el body, este endpoint solo puede ser usado por un usuario tipo administrador
router.get("/filtrar", auth, filtrarUsuarios);
// busca un usuario por el id pasado por parametro, este endpoint solo puede ser usado por un usuario tipo administrador
router.get("/:id", auth, verUsuario);
// elimina un usuario por el id pasado por parametro, este endpoint solo puede ser usado por un usuario tipo administrador
router.delete("/delete/:id", auth, eliminarUsuarioPorId);
// elimina un usuario por un parametro pasado por el body, este endpoint solo puede ser usado por un usuario tipo administrador
router.delete("/", auth, eliminarUsuariosPorFiltro);
// busca un usuario a travez en un id pasado por parametro y actualiza los valores pasados por el body
router.put("/:id", auth, actualizarUsuario);

//! 5.- Exportamos el enrutador
module.exports = router;


```

</details>



<details>
<summary> > :spiral_notepad: Products.routes.js </summary>

###

 ```javascript

const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const {
    nuevoProducto,
    verProductos,
    eliminarProductoPorId,
    actualizarProductoPorId,
    verMisProductosCreados,
} = require("../controllers");

//rutas
//crear un nuevo producto
router.post("/", auth, nuevoProducto);
//Ver todos los productos
router.get("/getAll", auth, verProductos);
//Filtrar las peliculas que ha creado el usuario logeado
router.get("/misPeliculas", auth, verMisProductosCreados);
//Eliminar un producto pasandole un id por parametro
router.delete("/:id", auth, eliminarProductoPorId);
//Actualizar un producto pasandol
router.put("/:id", auth, actualizarProductoPorId);

module.exports = router;


```

</details>


<details>
<summary> > :spiral_notepad: Sales.routes.js </summary>

###

 ```javascript


const express = require("express");
const auth = require("../middleware/auth");


const router = express.Router();


const {
  nuevaVenta,
  verVentas,
  filtrarVentasUsuario,
  actualizarEstadoId
} = require("../controllers");


router.post("/", auth, nuevaVenta);
router.post('/estado/:id',auth,actualizarEstadoId)
router.get("/getAll", auth, verVentas);
router.get("/compras", auth, filtrarVentasUsuario,);


module.exports = router;
```

</details>


</details>

<details>

<summary>:spiral_notepad: index.js</summary>

###
 ```javascript

//Importar variables de entorno
require('dotenv').config();

//Importación de los modelos
require('./models');

//Importar expres, mongoose y router
const express = require('express');
const mongoose= require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//instanciar la app
const app = express();

//configuración de middlewares
app.use(cors());
app.use(express.json());

//Coneccion a mongo
mongoose.connect(process.env.URI_MONGO_SERVER);

//Rutas
app.use('/v1',routes);
app.use((req,res)=>{
    res.send('<a href="/v1">Go to api</a>');
})

//Levantar el servidor 
app.listen(process.env.PORT,()=>{
    console.log('Servidor iniciado en el puerto'+process.env.PORT);
})


```

</details>

<details>

<summary>:date: .env</summary>

# Variables de entorno
	
 ```env

URI_MONGO_SERVER='en esta variable ponemos la ruta de coneccion con la base de datos de mongoDB'
SECRET = 'En esta variable ponemos el string que se utilizara para encriptiar la contraseña y para generar el token'
PORT = En esta varialble ponemos el puerto en el cual la express va a correr de manera local

```

</details>
 
</details>
 
  
  


