import TextField from '@mui/material/TextField'; // Importe le composant TextField de Material-UI
import Button from '@mui/material/Button'; // Importe le composant Button de Material-UI
import { useFormik } from 'formik'; // Importe la fonction useFormik de Formik pour la gestion du formulaire
import './ContactForm.css' // Importe le fichier CSS pour les styles supplémentaires du formulaire

function ContactForm () {
    // Fonction de validation du formulaire
    const validate = values => {
        const errors = {};

        // Validation du champ du prénom
        if (!values.firstName) {
            errors.firstName = 'Required';
            } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
            }
        
        // Validation du champ du nom de famille
        if (!values.lastName) {
            errors.lastName = 'Required';
            } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
            }
        
        // Validation du champ de l'email
        if (!values.email) {
            errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
            }

        // Validation du champ du message
        if (!values.message) {
            errors.message = 'Required';
            } else if (values.message.length < 10) {
            errors.message = 'Must be at least 10 characters';
            }
        
        return errors; // Retourne les erreurs de validation
    };

    // Initialisation de useFormik pour la gestion du formulaire
    const formik = useFormik({
        initialValues : {
            firstName : '',
            lastName : '',
            email : '',
            message : ''
        },
        validate, // Utilisation de la fonction de validation définie ci-dessus
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2)), // Affiche les valeurs soumises dans la console
            alert("Votre message à bien été envoyer") // Affiche une alerte pour indiquer que le message a été envoyé avec succès
        },
    })

    // Rendu du composant du formulaire de contact
    return (
        <>
            <div id='contact-container'>
                <h2 id='title'>Contact</h2>
                {/* Formulaire de contact avec soumission handleSubmit de useFormik */}
                <form onSubmit={formik.handleSubmit}>
                    {/* Champs du formulaire */}
                    <div id='inputs'>
                        <TextField 
                        size='small'
                        fullWidth
                        className='input'
                        id="firstName"
                        name="firstName"
                        label="Prénom"
                        variant="outlined" 
                        margin="normal"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}
                        {/* Répéter le même schéma pour les autres champs */}
                    </div>
                    {/* Bouton de soumission du formulaire */}
                    <Button 
                    sx={{backgroundColor:'#5A189A', color: '#FFF', '&:hover': {backgroundColor:'#fff', color: '#5A189A'}, fontWeight: 'bold'}} 
                    type="submit" 
                    variant="contained">Envoyer</Button>
                </form>
            </div>
        </>
    ) 
}

export default ContactForm // Exporte le composant ContactForm
