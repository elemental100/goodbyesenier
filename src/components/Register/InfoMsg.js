import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const InfoMsg = (props) => {

    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose} >
                <DialogTitle>
                    <label>แจ้งเตือน</label>
                </DialogTitle>
                <DialogContent>
                    <label>{props.text}</label>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Close
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InfoMsg;