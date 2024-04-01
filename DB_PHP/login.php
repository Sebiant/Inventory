<?php
require 'database.php';

session_start(); // Inicia la sesión aquí

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];

    $sql = "SELECT * FROM usuarios WHERE correo=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        if (password_verify($contraseña, $row['contraseña'])) {
            $_SESSION['correo'] = $correo;
            header("Location: ../inventario.html");
            exit();
        } else {
            echo "Credenciales inválidas. Por favor, inténtalo de nuevo.";
        }
    } else {
        echo "Credenciales inválidas. Por favor, inténtalo de nuevo.";
    }
}
?>
