function ControlWeb() {

    //Función para mostrar el formulario de agregar usuario
    this.mostrarAgregarUsuario = function () {
        
        let cadena = '<div class="form-group" id="mAU">'
        cadena += '<label for="usr">Nick:</label>'
        cadena += '<input type="text" class="form-control" id="nick">'
        cadena += '<button id="btnAU "type="button" class="btn btn-primary"> Submit </button> </div>'
        $("#au").append(cadena);

        $("#btnAU").on("click",function(){
            let nick = $("#nick").val();
            rest.agregarUsuario(nick);
        });

    }


    
}