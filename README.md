![Dise-o-sin-t-tulo.gif](https://i.postimg.cc/g03dNg5s/Dise-o-sin-t-tulo.gif)

# Api-ecoommerce-ucamp

**TABLA DE CONTENIDO**

1.-[Descripción](#Descripción)

2.-[Dependencias](#Dependencias)

3.-[Documentación para uso de la API](#Documentacion-para-uso-de-la-api)

4.-[Documentación del código](#Documentación-del-código)

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
    
```
Importante se debe agregar un archivo de variables de entorno.
la descripcion de las variable está en el apartado  Documentación del codigo > codigo > .env 
```

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
    "detalles": {
        "idUser": "635cd92b96e01a1c9db455c1",
        "type": "customer",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2MzVjZDkyYjk2ZTAxYTFjOWRiNDU1YzEiLCJ0eXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NjcwMjkyOTN9.c7WNCjOeOmOWMxusie7zR18LLvo5nTm1s6eXirLC81c"
    }
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
  -GET /user/
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
> Este recurso permite visualizar todos los productos que han sido creados
<details>
  <summary>Ver información</summary>
	
###### End point
```http
  GET /product/getAll
```





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
  GET /product/misProductos
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



###


  
<details>

<summary>:file_folder: Models</summary>

###
   
   
<details>

<summary> >  :spiral_notepad: index.js</summary>

 ###
	
```	
En este archivo importamos y exportamos todas las funciones de los archivos model.js, el motivo es para cuando tengamos que hacer uso
de ellas no tengamos que importarlas desde los diferentes archivos, en lugar de eso las tendremos todas disponibles 
desde un solo archivo	
```	

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
	
```	
En este archivo crearemos el modelo de los usuarios, es decir que propiedades tendran en la base de datos de mongoDB.
Tambien designaremos el nombrede la colección
	
```		
  
```javascript

const mongoose = require('mongoose');  // Importamos la librería  mongoose ya que la estaremos usando para crear el modelo 
const crypto = require('crypto');      // Importamos la librería cryto la cual se utilizara para encriptar la contraseña
const jwt = require('jsonwebtoken');   // Importamoos la librería de jsonwebtoken la cual la utilizaremos para generar los tokens de logeo 	 
const uniqueValidator = require('mongoose-unique-validator'); // Hacemos uso de esta librería para asegurarnos que ciertos valores como el correo sean únicos


// Creamos el modelo y designamos el tipo , si son obligatorias , unicas y demas requerimiento que tendran cada una de las propiedades

const UserSchema = new mongoose.Schema({
    name:{
        type:String,	//Designamos que este campo sera un String
        required:true,	//Designamos que este campo es obligatorio
    },	
    surname:{
        type:String,
        required: true,
    },
    mail:{
        type: String,
        required:true,
        unique: true, //Designamos que este campo no se puede repetir en otro documento
	
	// Designamos a través de una expresión regular que debe ser un email válido
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
	//A través de enum validamos que los valores ingresados sean los que designamos en el array del mismo  
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



// Usamos el plugin de uniqueValidator para por utilizar la propiedad unique dentro del esquema 
UserSchema.plugin(uniqueValidator)

/* Encrypting the password. */
	
// Creamos un metodo el cual nos realizara la encriptacion de la contraseña 
	
UserSchema.methods.encryptString = function(stringToEncript,salt){
    return crypto.pbkdf2Sync(stringToEncript,salt,10000,5,'sha512').toString('hex');
}

/* Creamos un metodo el cual generara un string aleatorio de 16 caracteres el cual se lo asignaremos a la propiedad salt
de nuestro esquema para luego utilizar dentro de este metodo el metodo de empritación de la contraseña el cual 
requiere el salt ya generado y la contraseña sin encriptar */
	
UserSchema.methods.hashPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex'); // Esta es la parte que genera un string aleatorio y se lo asigna a la prop salt
    this.password = this.encryptString(password,this.salt) // Aquí hacemos uso del método que creamos anteriormente para encriptar la contraseña
}

/* Con este metodo verificamos si la contraseña ingresada es la misma que la contraseña que guardamos anteriormente
la forma en que lo realizamos es encriptar la contraseña nueva con los mismos parametros y la comparamos con la ya 
guardada*/
	
UserSchema.methods.verifyPassword = function(password){
    return this.encryptString(password,this.salt) === this.password;
}

/*Este metodo nos genera un token a partir del idUser,y type para esto usamos la funcion de la libreia
	jsonwebtoken. */
UserSchema.methods.generateJWT = function(){
    return jwt.sign({idUser: this._id,type:this.type},process.env.SECRET)
}

	
/* Este metodo nos devuelve el id del usuario el type y ademas el token necesario para autenticarnos*/
UserSchema.methods.onSingGenerateJWT = function(){
    return{
        idUser: this._id,
        type: this.type,
        token: this.generateJWT(),
    }
}

/* Con esta linea creamos el modelo llamado User con el squema UserSchema y que este en la collecion CollectionUser */
mongoose.model('User',UserSchema,'collectionUser')





```
 
</details>

<details>

 <summary> >  :spiral_notepad: Product.model.js </summary>
 
 ###

```	
En este archivo crearemos el modelo de los usuarios, es decir que propiedades tendran en la base de datos de mongoDB.
Tambien designaremos el nombrede la colección
	
```		
	
```javascript
const mongoose = require('mongoose') // Importamos mongoose para crear los modelos 

// Creamos el modelo y designamos el tipo , si son obligatorias , unicas y demas requerimiento que tendran cada una de las propiedades

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
 
```	
En este archivo crearemos el modelo de los usuarios, es decir que propiedades tendran en la base de datos de mongoDB.
Tambien designaremos el nombrede la colección

```
 
 ```javascript

const mongoose = require("mongoose"); // Importamos mongoose para crear los modelos 

// Creamos el modelo y designamos el tipo , si son obligatorias , unicas y demas requerimiento que tendran cada una de las propiedades


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
	
```	
En este archivo importamos todas las funciones de los archivos cotrollers.js, el motivo es para cuando tengamos que hacer uso
de ellas no tengamos que importarlas desde los diferentes archivos, en lugar de eso las tendremos todas disponibles 
desde un solo archivo	
```
	
	
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

```
En este documento se encuentran todas las funciones que utilizaremos para manipular nuestra base de datos 
con respecto al usuario

```  
  
```javascript

const mongoose = require('mongoose'); // importamos mongoose
const User = mongoose.model('User'); // importamos el modelo User


 /* Crea un nuevo usuario con la información que recibe del body encripta la contraseña y guarda la toda la informacion
 en nuestra base de datos*/
 
const registro = async (req,res) =>{
    try{

        const{password} = req.body; // guardamos la contraseña que tomamos del body en una variable
        delete req.body.password;   // eliminamos la contraseñ del body por seguridad
        const user = new User(req.body) // Creamos un nuevo usuario con la información que viene del body
        user.hashPassword(password);  // Encriptamos la contraseña y se la asignamos al user
        await user.save(); // Guardamos el usuario
        
        return res.status(201).json({mensaje:'Usuario Creado',detalles: user.onSingGenerateJWT()}) // si no hubo errores en el proceso retorna un token
												   // con el id y el tipo de usuario
    }catch(e){
        return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }

}

/*
Con esta funcion buscaremos a un usuario a través del e-mail que recibimos del body, luego si este existe 
encriptamos la contraseña que recibimos por el body y validamos que sea la misma que el usuario que se encontro
a través del e mail, si todo es correcto retorna un token con el id y el tipo de usuario caso contrario
retorna un mensaje de error
 */
const login = async(req,res)=>{
    try {
        const{mail,password} = req.body;
        const user = await User.findOne({mail});  // busca el usuario a través del mail

        if(!user){
            return res.status(400).json({mensaje:'error',detalles:'Usuario no encontrado'});
        }
        if(user.verifyPassword(password)){  // verifica que la contraseña sea la misma dle usuario encontrado
            return res.status(200).json({mensaje:'Login correcto', detalles: user.generateJWT()}) // retorna el token de autorización
        }

        return res.status(400).json({mensaje: 'Error', detalles:'Contraseña incorrecta'});
    } catch (e) {
        return res.status(400).json({mensaje:'Error',detalles:  e.message});
    }
};

/*
 Retorna la lista de todos los usuarios pero esta funcion solo se puede usar si su usuario es de tipo
 administrador 
 */
const verUsuarios = async (req, res) => {
    try {
      if (req.user.type !== "admin") {  // validación que el usuario sea tipo administrador
        return res.status(400).json({mensaje: "Error",detalles: "No tienes permiso para ver esto",});
      }
      const usuarios = await User.find({},{  // busqueda de todos los usuarios con los parametros que se quieren mostrar
        name: true,
        surename: true,
        mail: true,
        age: true,
        type: true,
        img: true,
      });
      if (!usuarios.length) // validación que la colección no este vacía 
        return res.status(404).json({ mensaje: "Error", detalles: "Colección vacía" });
      return res.status(200).json({ mensaje: "Usuarios encontrados", detalles: usuarios });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


/*
 Retorna los datos de un usuario en especifico buscado por el id pasado a través del ID
 esta funcion valida que el usuario sea administrador 
 */
  const verUsuario = async (req, res) => {
    try {
      if (req.user.type !== "admin") { // valida si el usuario es administrador 
        return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
      }
      console.log(req.query)
      const usuario = await User.findById(req.params.id); // busca al usuario por el id 
      if (!usuario)
        return res.status(404).json({ mensaje: "Error", detalles: "No existe este usuario" });
      return res.status(200).json({ mensaje: "Usuario encontrado", detalles: usuario });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };

/*
Filtra el usuario dependiendo el parametro pasado por el body, también valida si el usuario es aministrador
*/
  const filtrarUsuarios = async (req, res) => {
    
    try {
        if (req.user.type !== "admin") { // valida si el usuario es administrador
            return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
          }
      const usuarios = await User.find(req.body); // busca a un usuario según los parametros pasados por el body
      if (!usuarios.length)
        return res.status(404).json({ mensaje: "Error", detalles: "Usuarios no encontrados" });
      return res.status(200).json({ mensaje: "Usuarios encontrados", detalles: usuarios });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


/*
Elimina a un usuario de la base de datos a través del ID, verifica que seamos usuarios para poder relizar la consulta.
*/
  const eliminarUsuarioPorId = async (req, res) => {
    try {
        if (req.user.type !== "admin") { // verifica que el usuario se administrador
            return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
          }
      const  id  = req.params.id;  // guarda el id en una variable del misimo nombre
      if (id.length !== 24) // certifica que el id sea de 24 caracteres que es el formato que se esta usando
        return res.status(400).json({ mensaje: "Error", detalles: "ID no válido" });
      const usuario = await User.findById(id); // encuentra el usuario a través del id
      if (!usuario)// valida que el usuario exista 
        return res.status(404).json({ mensaje: "Error", detalles: "Usuario no encontrado" });
      const eliminado = await User.findByIdAndDelete(id); // elimina al usuario a través del id
      return res.status(200).json({ mensaje: "Usuario eliminado", detalles: eliminado });
    } catch (e) {
      return res.status(400).json({ mensaje: "Errorr", detalles: e.message });
    }
  };
  

/*
 Elimina a todos los usuarios que tengan las propiedades pasadas por el body, verifica que el usuario
 sea tipo administrador
*/
  const eliminarUsuariosPorFiltro = async (req, res) => {
    try {
        if (req.user.type !== "admin") { // verifica que el usuario sea administrador 
            return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
          }
      const eliminados = await User.deleteMany(req.body); // elimina a todos los usuarios que hagan match con los parametros pasados por el body
      return res
        .status(200)
        .json({ mensaje: "Usuarios eliminados", detalles: eliminados });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };
  
/*
Actualiza los datos de un usuario encontrado a través del Id, los datos modificados seran los pasados por el body
verifica que el usuario sea de tipo administrador 
*/
  const actualizarUsuario = async (req, res) => {
    try {
        if (req.user.type !== "admin") { // valida que el usuario sea tipo administrador
            return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
          }
      const { id } = req.params; // guarda el id en una variable del mismo nombre
      const actualizado = await User.findByIdAndUpdate(   //busca al usuario por el id y actualiza los datos pasados por el body
        id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json({ mensaje: "Usuario actualizado", detalles: actualizado });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };

/*
Retorna los datos del usuario que se encuentra logeado 
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
 
 ```
En este documento se encuentran todas las funciones que utilizaremos para manipular nuestra base de datos 
con respecto al producto

```  
 
 ###

```javascript

const mongoose = require("mongoose"); // importa mongoose
const Product = mongoose.model("Product"); // importa el modelo Product

/*
Con esta función creamos un nuevo producto, tambien valida que solo un usuario tipo administrador pueda
realizr esta accion, las propiedades del producto se reciben por el body
*/
const nuevoProducto = async (req, res) => {
    try {
      if (req.user.type !== "admin") { //valida que el usuario sea de tipo administrador
        return res.status(403).json({  mensaje: "Error",detalles: "Sólo un admin puede crear un nuevo producto",
          });
      }
      
      const producto = new Product({...req.body, uploader: req.user.idUser});  // crea un producto con los datos pasados por el body y 
										// el uploader toma los datos del mismo usuario 
  
      const resp = await producto.save(); // guarda el producto
  
      return res.status(201).json({mensaje: "Producto creado",detalles: await resp.populate("uploader", "name",),
      });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


 /*
  Esta función retorna todos los producto existentes
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


/*
Retorna todos los productos creados por el usuario que se encuentra logeado
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


/*
Elimina un producto a través de su id, tambien valida que el usuario sea de tipo administrador
*/
  const eliminarProductoPorId = async (req, res) => {
    try {
       if (req.user.type !== "admin") { //valida que el usuario se admin
            return res.status(400).json({mensaje: "Error",detalles: "No tienes permiso para ver esto",});
        }
      const { id } = req.params; 
      if (id.length !== 24) // valida que el id tenga el formato correcto es decir 24 caraceres en este caso
        return res.status(400).json({ mensaje: "Error", detalles: "ID no válido" });
      const products = await Product.findById(id);// busca el producto
      if (!products)
        return res.status(404).json({ mensaje: "Error", detalles: "Producto no encontrado" });
      const eliminado = await Product.findByIdAndDelete(id);
      return res.status(200).json({ mensaje: "Producto eliminado", detalles: eliminado });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


/*
Actualiza un producto a encontrandolo por el id pasado por parametro y actualiza sus propiedades dependiendo lo que se le pase por el body 
*/
const actualizarProductoPorId = async (req, res) => {
  try {
    const { id } = req.params; // guarda el id en una variable del mismo nombre

    const actualizado = await Product.findByIdAndUpdate( // encuentra y actualiza al producto
      id,
      { $set: req.body }, // datos que serán actualizado
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
 
```
En este documento se encuentran todas las funciones que utilizaremos para manipular nuestra base de datos 
con respecto al modelo Sale

``` 

```javascript

const mongoose = require("mongoose"); // importamos mongoose
const Sale = mongoose.model("Sale");// importamos el modelo Sale


/*
crea una nueva venta con datos pasados pasados por el body y el buyer sera el usuario logeado
*/
const nuevaVenta = async (req, res) => {
  try {
    const sales = new Sale({ ...req.body, buyer: req.user.idUser });// creando el modelo con los datos

    const resp = await sales.save(); // guardando el modelo creado en la base de datos

    return res.status(201).json({
      mensaje: "Venta creada",
      detalles: await (await resp.populate({path:'products',select:{name:true,price:true}})).populate("buyer", "name")
    });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};


/*
Esta funcion retorna todas las ventas que existen en la colección, con los productos comprados y el usuario que realizo la compra
tambien verifica que el usuario sea tipo administrador
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


/*
Retorna todas las compras realizadas por el usuario que se encuentra logeado
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



/*
Esta función actualiza el estado de una venta, los cuales pueden ser (solicitado,confirmado o enviado)
esta funcion verifica que el usuario sea administrador ya que solo le es util al mismo
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
 
 ```
En este archivo se encuentran las reglas de nuestra apo
```
 
 ```javascript

const { expressjwt: jwt } = require("express-jwt");

/*
Esta función primero valida que exista un token de autorizacion pasado en el header si no es asi retorna null, luego divide el token en dos partes
primero en el tipo de autorizacion y luego en el token

 */
const getToken = (req) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return null;
  }

  const [type, token] = authorization.split(" ");

  return type === "Bearer" || type === "Token" ? token : null;
};

/* Esta función hace uso de la biblioteca express-jwt para crear una función de middleware que se usará para autenticar al usuario. */
const auth = jwt({
  secret: processu.env.SECRET,
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
	
```	
En este archivo realizamos el enrrutamiento de las diferentes partes de nuestra api que en este caso son /user , /product, /sale  

```
	
	
 ```javascript

const express = require("express");     // importamos express
const router = express.Router();	// hacemos uso de la funcion express.Router para realizar el enrrutamiento
const userRouter = require("./User.routes"); // Importamos nuestras rutas User
const productRouter = require("./Proucts.routes"); // Importamos nuestras rutas User
const saleRouter = require("./Sales.routes");  // Importamos nuestras rutas User

	
	
// Aqui definimos lo que ira en nuestra ruta principal o ruta base 
router.get("/", (req, res) => {       
  res.send(`
    <h1>Welcome to API!</h1>
    `);
});

// Realizamos el enrutamiento de las rutas, asi evitamos excribir manualmente /user o /productos o /sale en cada uno de las sub rutas	
	
router.use("/user", userRouter);  
router.use("/product", productRouter);
router.use("/sale", saleRouter);

// Realizamos la exportacioon de todas las rutas 
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


//rutas
//crea una nueva venta
router.post("/", auth, nuevaVenta);
//actualiza el estado de una venta
router.put('/estado/:id',auth,actualizarEstadoId)
// obtiene todas las ventas
router.get("/getAll", auth, verVentas);
// obtiene las compras hechas por el usuario
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

<summary>:page_facing_up: .env</summary>

# Variables de entorno
	
 ```env

URI_MONGO_SERVER='en esta variable ponemos la ruta de coneccion con la base de datos de mongoDB'
SECRET = 'En esta variable ponemos el string que se utilizara para encriptiar la contraseña y para generar el token'
PORT = En esta varialble ponemos el puerto en el cual la express va a correr de manera local

```

</details>
 

 
  
  


