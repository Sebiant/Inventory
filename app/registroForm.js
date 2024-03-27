import { createUserWhitEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from './firebase'


const registro_formulario = document.querySelector('#registro-form')


registro_formulario.addEventListener('submit', async (e) => {
    e.preventDefault()
     
    const email = registro_formulario['registro-email'].value
    const password = registro_formulario['registro-password'].value

    try {
        const credenciales = await createUserWhitEmailAndPassword(auth, email, password)
        console.log(credenciales)
        
    } catch (error) {
        console.log(error)
    }

})