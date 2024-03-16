function Sistema(){

    this.usuarios={};

    //Agregar un usuario al sistema
    this.agregarUsuario=function(nick){

        let res={"nick":-1};

        if (!this.usuarios[nick]){
            this.usuarios[nick]=new Usuario(nick);
            res.nick=nick;
        }
        else{
            console.log("El nick "+nick+" está en uso"); 
        }

        return res;
    }
        

    //Obtener todos los usuarios del sistema
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }

    //Obtener el número de usuarios del sistema
    this.numeroUsuarios=function(){

        let numUsuarios = Object.keys(this.usuarios);
        
        return {"numero de usuarios":numUsuarios.length};

    }

    // Verificar si un usuario está activo
    this.usuarioActivo = function(nick) {

        let res = {"activo":false};

        if(nick in this.usuarios){
            res.activo=true;
            return res;
        }else{  
            return res;
        }   

    }

    //Eliminar un usuario del sistema
    this.eliminarUsuario=function(nick){

        let res={"nick":-1};

        if (this.usuarios[nick]){
            delete this.usuarios[nick];
            console.log("Usuario "+nick+" eliminado");
            res.nick= "Usuario " + nick + " eliminado";
        }
        else{
            console.log("Usuario "+nick+" no encontrado"); 
            res.nick= "Usuario " + nick + " no encontrado";
        }

        return res;
        
    }

}

function Usuario(nick){
    this.nick=nick;
}

module.exports.Sistema=Sistema;
   