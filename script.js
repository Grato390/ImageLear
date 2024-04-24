// Lista de usuarios y contraseñas
var usuarios = [
    { username: 'usuario1', password: 'co1' },
    { username: 'usuario3', password: 'co3' }
];

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar las credenciales ingresadas por el usuario
    var usuarioValido = false;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username === username && usuarios[i].password === password) {
            usuarioValido = true;
            break;
        }
    }

    // Redirigir al dashboard si el inicio de sesión es exitoso
    if (usuarioValido) {
        localStorage.setItem('value', 'hello');


        // Redirigir al usuario a la segunda página


        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
