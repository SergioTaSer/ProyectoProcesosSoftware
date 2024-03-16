function ClienteRest(){

    //Función para agregar un usuario
    this.agregarUsuario=function(nick){
        var cliente=this;
        $.getJSON("/agregarUsuario/"+nick,function(data){ 
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
            }
            else{
                console.log("El nick "+nick+" está en uso");
            }
        })
    }

    //Función para obtener todos los usuarios
    this.obtenerUsuarios=function(){
        var cliente=this;
        $.getJSON("/obtenerUsuarios",function(data){
            console.log(data);
        })
    }

    //Función para obtener el número de usuarios
    this.numeroUsuarios=function(){
        var cliente=this;
        $.getJSON("/numeroUsuarios",function(data){
            console.log(data);
        })
    }

    //Función para verificar si un usuario está activo
    this.usuarioActivo=function(nick){
        var cliente=this;
        $.getJSON("/usuarioActivo/"+nick,function(data){
            console.log(data);
        })
    }

    //Función para eliminar un usuario
    this.eliminarUsuario=function(nick){
        var cliente=this;
        $.getJSON("/eliminarUsuario/"+nick,function(data){
            console.log(data);
        })
    }

    
       

}