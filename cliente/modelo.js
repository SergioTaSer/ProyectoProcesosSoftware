function Sistema(){

    this.usuarios={};

    //Agregar un usuario al sistema
    this.agregarUsuario=function(nick){
        this.usuarios[nick]=new Usuario(nick);
    }

    //Obtener todos los usuarios del sistema
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }

    //Obtener el número de usuarios del sistema
    this.numeroUsuarios=function(){
        return Object.keys(this.usuarios).length;
    }

    // Verificar si un usuario está activo
    this.usuarioActivo = function(nick) {
        if(nick in this.usuarios){
            return true;
        }else{  
            return false;
        }   
    }

    //Eliminar un usuario del sistema
    this.eliminarUsuario=function(nick){
        delete this.usuarios[nick];
    }

}

function Usuario(nick){
    this.nick=nick;
}
   