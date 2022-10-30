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