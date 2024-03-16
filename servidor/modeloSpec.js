const modelo = require('./modelo.js');

/** PRUEBAS GESTIÓN DE USUARIOS **/

describe('El sistema...', function() {

  let sistema;

  //Bloque de inicialización de las pruebas, se ejecuta antes de cada una de las pruebas
  beforeEach(function() {
    sistema=new modelo.Sistema()
  });

  //Prueba 1: Verificar que inicialmente no hay usuarios
  it('inicialmente no hay usuarios', function() {
    expect(sistema.numeroUsuarios()).toEqual({"numero de usuarios": 0});
  });

  //Prueba 2: Agregar un usuario al sistema
  it('agregar un usuario al sistema', function() {
    sistema.agregarUsuario('user1');
    expect(sistema.numeroUsuarios()).toEqual({"numero de usuarios": 1});
  });

  //Prueba 3: Obtener todos los usuarios del sistema
  it('obtener todos los usuarios del sistema', function() {
    sistema.agregarUsuario('user1');
    sistema.agregarUsuario('user2');
    expect(sistema.numeroUsuarios()).toEqual({"numero de usuarios": 2});
  });

  //Prueba 4: Verificar si un usuario está activo
  it('verificar si un usuario está activo', function() {
    sistema.agregarUsuario('user1');
    expect(sistema.usuarioActivo('user1')).toEqual({"activo": true});
  });
  
  //Prueba 5: Eliminar un usuario del sistema
  it('eliminar un usuario del sistema', function() {
    sistema.agregarUsuario('user1');
    expect(sistema.numeroUsuarios()).toEqual({"numero de usuarios": 1});
    sistema.eliminarUsuario('user1');
    expect(sistema.numeroUsuarios()).toEqual({"numero de usuarios": 0});
  });

})
  