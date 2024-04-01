$(document).ready(function() {
    // Manejar el envío del formulario de inicio de sesión
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        var formData = $(this).serialize(); // Serializar datos del formulario
        // Realizar solicitud AJAX al script de inicio de sesión
        $.ajax({
            url: './DB_PHP/login.php',
            method: 'POST',
            data: formData, // Enviar datos serializados del formulario
            success: function(response) {
                console.log(response); // Manejar respuesta del servidor
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); // Manejar errores
            }
        });
    });

    // Manejar el envío del formulario de registro
    $('#registerForm').submit(function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        var formData = $(this).serialize(); // Serializar datos del formulario
        // Realizar solicitud AJAX al script de registro
        $.ajax({
            url: './DB_PHP/register.php',
            method: 'POST',
            data: formData, // Enviar datos serializados del formulario
            success: function(response) {
                console.log(response); // Manejar respuesta del servidor
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); // Manejar errores
            }
        });
    });
});


