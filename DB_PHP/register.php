<?php
require 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña']; 


    $sql = "SELECT * FROM usuarios WHERE correo='$correo'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "El correo electrónico ya está registrado. Por favor, utiliza otro.";
    } else {

        $hashed_password = password_hash($contraseña, PASSWORD_DEFAULT);


        $sql = "INSERT INTO usuarios (correo, contraseña) VALUES ('$correo', '$hashed_password')";
        if ($conn->query($sql) === TRUE) {
            echo "Registro exitoso. ¡Bienvenido, $correo!";
        } else {
            echo "Error al registrar el usuario: " . $conn->error;
        }
    }
}
?>
