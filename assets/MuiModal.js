import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <a onClick={handleOpen}>Login</a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Login to your account
                    </Typography>
                    <form>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div>
                            <Button variant="contained" color="primary" type="submit" >
                                Login
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
