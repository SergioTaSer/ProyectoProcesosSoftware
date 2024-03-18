function ControlWeb() {

    //Función para mostrar el formulario de agregar usuario
    this.mostrarAgregarUsuario = function () {
       
        let cadena = '<div class="form-group" id="mAU">'
        cadena += '<label for="usr">Nick:</label>'
        cadena += '<input type="text" class="form-control" id="nick">'
        cadena += '<button id="btnAU" type="button" class="btn btn-primary"> Submit </button> </div>'
        $("#au").append(cadena);

        $("#btnAU").on("click",function(){
            let nick = $("#nick").val();
            rest.agregarUsuario(nick);
        });

    }

    //Función para mostrar un mensaje
    this.mostrarMensaje = function (msg) {
        let cadena = '<h3 id = "msg" >' + msg +'</h2>';
        $('#msg').append(cadena);
    }

    //Función para comprobar la sesión (cookie)
    this.comprobarSesion=function(){
        let nick= $.cookie("nick");

        if (nick){
            cw.limpiar();
            cw.mostrarMensaje("Bienvenido "+nick+"!");
        }
        else{
            cw.mostrarAgregarUsuario();
        }
    }

    this.salir=function(){
        $.removeCookie("nick");
        location.reload();
    }

    this.limpiar=function(){
        $("#au").remove();
    }

}