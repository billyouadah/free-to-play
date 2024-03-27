import { useState } from 'react';
import PopUp from './PopUp';
import TextField from '@mui/material/TextField'; // Importe le composant TextField de Material-UI
import Button from '@mui/material/Button'; // Importe le composant Button de Material-UI
import { useFormik } from 'formik'; // Importe la fonction useFormik de Formik pour la gestion du formulaire
import './ContactForm.css' // Importe le fichier CSS pour les styles supplémentaires du formulaire

function ContactForm () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Fonction de validation du formulaire
    const validate = values => {
        const errors = {};

        // Validation du champ du prénom
        if (!values.firstName) {
            errors.firstName = 'Required'; // Message d'erreur si le champ est vide
            } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less'; // Message d'erreur si le champ dépasse 15 caractères
            }
        
        // Validation du champ du nom de famille
        if (!values.lastName) {
            errors.lastName = 'Required'; // Message d'erreur si le champ est vide
            } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less'; // Message d'erreur si le champ dépasse 20 caractères
            }
        
        // Validation du champ de l'email
        if (!values.email) {
            errors.email = 'Required'; // Message d'erreur si le champ est vide
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'; // Message d'erreur si l'email est invalide
            }

        // Validation du champ du message
        if (!values.message) {
            errors.message = 'Required'; // Message d'erreur si le champ est vide
            } else if (values.message.length < 10) {
            errors.message = 'Must be at least 10 characters'; // Message d'erreur si le message est inférieur à 10 caractères
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
            handleOpen(); // Ouvre le modal
        },
    })

    // Rendu du composant du formulaire de contact
    return (
        <>
            <div id='contact-container'>
                <h2 id='title'>Contact</h2>
                <form onSubmit={formik.handleSubmit}>
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
                            <div className='error'>{formik.errors.firstName}</div>
                        ) : null}
                        <TextField 
                        size='small'
                        fullWidth
                        className='input'
                        id="lastName"
                        name="lastName"
                        label="Nom de famille"
                        variant="outlined" 
                        margin="normal"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className='error'>{formik.errors.lastName}</div>
                        ) : null}

                        <TextField 
                        size='small'
                        fullWidth
                        className='input'
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined" 
                        margin="normal"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}</div>
                        ) : null}

                        <TextField 
                        size='small'
                        fullWidth
                        className='input'
                        id="message"
                        name="message"
                        label="Votre Message"
                        multiline rows={4}
                        variant="outlined" 
                        margin="normal"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <div className='error'>{formik.errors.message}</div>
                        ) : null}
                    </div>
                    <Button 
                    sx={{backgroundColor:'#5A189A', color: '#FFF', '&:hover': {backgroundColor:'#fff', color: '#5A189A'}, fontWeight: 'bold'}} 
                    type="submit" 
                    variant="contained">Envoyer</Button>
                </form>
            </div>
            <PopUp isOpen={open} handleClose={handleClose} />
        </>
    ) 
}

export default ContactForm