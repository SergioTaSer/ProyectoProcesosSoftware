const fs=require("fs");
const express = require('express'); const app = express();
const modelo = require("./servidor/modelo.js");

const PORT = process.env.PORT || 3000;

//Ruta de los archivos
app.use(express.static(__dirname + "/"));

let sistema = new modelo.Sistema();

//Ruta para la página principal
app.get("/", function(request,response){
    var contenido=fs.readFileSync(__dirname+"/cliente/index.html");
    response.setHeader("Content-type","text/html");
    response.send(contenido);
});

//Método para agregar un usuario
app.get("/agregarUsuario/:nick",function(request,response){
    let nick=request.params.nick; 
    let res=sistema.agregarUsuario(nick);
    response.send(res);
});

//Método para obtener todos los usuarios
app.get("/obtenerUsuarios",function(request,response){
    let res=sistema.obtenerUsuarios();
    response.send(res);
});

//Método para obtener el número de usuarios
app.get("/numeroUsuarios",function(request,response){
    let res=sistema.numeroUsuarios();
    response.send(res);
});



//Método para verificar si un usuario está activo
app.get("/usuarioActivo/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.usuarioActivo(nick);
    response.send(res);
});

//Método para eliminar un usuario
app.get("/eliminarUsuario/:nick",function(request,response){
    let nick=request.params.nick;
    let res = sistema.eliminarUsuario(nick);
    response.send(res);
});
    

app.listen(PORT, () => {
    console.log(`App está escuchando en el puerto ${PORT}`);
    console.log('Ctrl+C para salir');
});