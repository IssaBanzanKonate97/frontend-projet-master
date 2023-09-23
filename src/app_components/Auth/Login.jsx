import './index.css' // Importe un fichier CSS spécifique pour ce composant
import { useState, useRef } from 'react'; // Importe les hooks useState et useRef de React
import logo from '../../assets/logo.png'; // Importe une image de logo à partir du répertoire des actifs
import backgroundImage from '../../assets/DSCF8840-scaled.webp'; // Importe une image d'arrière-plan à partir du répertoire des actifs
import { Key, Mail } from 'react-feather'; // Importe les icônes de clé et de courrier électronique du module react-feather
import { loginUser } from '../../app_contexts/Auth/functions'; // Importe la fonction loginUser depuis le module des fonctions de contexte d'authentification

const Login = () => {
    const [error, setError] = useState(undefined); // Déclare une variable d'état 'error' avec son mutateur 'setError'

    const id_ref = useRef(null); // Déclare une référence non réactive 'id_ref' initialisée à null
    const password_ref = useRef(null); // Déclare une référence non réactive 'password_ref' initialisée à null

    const handleSubmit = async (e) => { // Définit une fonction de gestion de la soumission du formulaire
        e.preventDefault(); // Empêche le comportement par défaut de la soumission du formulaire

        const username = id_ref.current.value; // Récupère la valeur du champ 'Identifiant' à partir de la référence 'id_ref'
        const password = password_ref.current.value; // Récupère la valeur du champ 'Mot de Passe' à partir de la référence 'password_ref'

        await loginUser(username, password); // Appelle la fonction loginUser avec les valeurs de l'identifiant et du mot de passe
    }

    return <section className='w-full bg-gray-200 fixed inset-0'
           style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='bg-white border shadow-xl rounded-lg w-full max-w-lg mx-auto mt-16 p-5'>
            <form className='flex flex-col justify-center' onSubmit={(e) => { handleSubmit(e) }}>
                <div className="mx-auto mb-6">
                    <img src={logo} className="h-20 w-20 rounded-full" />
                </div>

                {error && <div className='bg-red-50 p-2 rounded text-red-500 mb-2'>
                    Erreur : {error}
                </div>}

                <h1 className='text-lg text-center font-bold mb-2'>
                    Se connecter
                </h1>

                <div className="wrap-input100 validate-input">
                    <input ref={id_ref} className="input100" type="text" name="Identifiant" placeholder="Identifiant" required />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <Mail className='h-4 w-4' />
                    </span>
                </div>

                <div className="wrap-input100 validate-input">
                    <input ref={password_ref} className="input100" type="password" name="Password" placeholder="Mot de Passe" required />


                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <Key className='h-4 w-4' />
                    </span>
                </div>

                <div className="container-login100-form-btn">


                    <input className="login100-form-btn" type='submit' value="Se connecter" />

                </div>
                <div className='inscription'>
                    
                    <a href="p">je n'ai pas de compte</a>
                </div>
                <div className="text-center p-t-136 Accueil">

                </div>
            </form>
        </div>
    </section>
};

export default Login;