import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


function PopUp({ isOpen, handleClose }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 340,
        color: '#fff',
        bgcolor: '#9D4EDD',
        border: '2px solid #10002B',
        borderRadius: 5,
        boxShadow: 20,
        p: 4,
    };

    return (
        <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
        >
            <Fade in={isOpen}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                        Votre message à été envoyer.
                </Typography>
            </Box>
            </Fade>
        </Modal>
        </div>
    );
}

export default PopUp