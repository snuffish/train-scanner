import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';

type DialogComponentProps = {
    title: string
    onClose: any
}

const DialogComponent = ({ title, onClose, ...rest }: DialogComponentProps) => {
    const [open, setOpen] = useState(true)

    const onCloseHandler = () => null

    return (
        <Dialog
            open={open}
            onClose={onClose ?? onCloseHandler}>
            <DialogTitle onClick={onClose ?? onCloseHandler}>{title}</DialogTitle>
            <DialogContent dividers {...rest} />
            <DialogActions>
                <Button onClick={onClose ?? onCloseHandler}>Close</Button>
            </DialogActions>
        </Dialog >
    )
}

export default DialogComponent