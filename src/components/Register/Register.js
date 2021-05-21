import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import InfoMsg from './InfoMsg';
import bgImg from './bgImg.png';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        // top: 0,
        // left: 0,
        // position: 'absolute',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        padding: '20px 20px',
        // position: 'absolute',
        // left: '50%',
        // top: '50%',
        // transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '500px',
        fontSize: '22px'
    },
    txtFld: {
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
        }
    }
}));

const Register = ({onSuccess}) => {

    const classes = useStyles();
    const [stdID, setStdID] = useState('');
    const [openInfo, setOpenInfo] = useState(false);
    const [infoTxt, setInfoTxt] = useState('');
    const [data, setData] = useState('');
    const [nextPage, setNextPage] = useState(false);
    const history = useHistory();

    const handleKeyDown = (e) => {
        (e.key === 'Enter') && submitRequest();
    }

    // const registerFunc = () => {

    //     if (stdID.length !== 10) {
    //         setOpenInfo(true);
    //         setInfoTxt('กรุณากรอกรหัสนักศึกษาให้ครบ 10 หลัก');
    //     } else {
    //         submitRequest();
    //     }

    // }

    const submitRequest = async () => {

        try {

            const res = await axios({
                method: 'post',
                url: 'https://yo2h8kjeh9.execute-api.ap-southeast-1.amazonaws.com/productions/getstudata',
                data: {
                    "stdId": stdID
                }
            });

            const data = res.data
            const result = data.apiresult;
            let info = '';
            if (result) {

                const registered = data.data.registered;
                const stdInfo = data.data.info

                if (!registered) {
                    await axios({
                        method: 'post',
                        url: 'https://yo2h8kjeh9.execute-api.ap-southeast-1.amazonaws.com/productions/getstudata/register',
                        data: {
                            "stdId": stdID
                        }
                    });
                    info = `คุณ ${stdInfo.fName} ${stdInfo.lName} ลงทะเบียนสำเร็จ`;
                } else {
                    info = `ลงทะเบียนไปแล้ว`;
                }

                setNextPage(true);
                setData(stdInfo);

            } else {
                info = data.data;
            }
            
            setInfoTxt(info);
            setOpenInfo(true);

        } catch (error) {
            console.log(error);
        }

    }

    const closeInfo = () => {

        setOpenInfo(false);
        setStdID('');

        if(nextPage){
            onSuccess(true);
            history.push({
                pathname: '/Main',
                state: {
                    name: `${data.fName} ${data.lName}`,
                    stdID: stdID
                }
            })
        }

    }


    return (
        <div className={classes.root}>
            <InfoMsg open={openInfo} onClose={closeInfo} text={infoTxt} />
            <Paper className={classes.paper}>
                <label>ลงทะเบียนเข้างาน ET Bye nior 2021</label>
                <form className={classes.loginForm} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                    <TextField
                        id="studentID-id" variant="outlined" label="รหัสนักศึกษา(Student ID)" className={classes.txtFld} fullWidth
                        size='small' margin='normal' type='number'
                        onChange={(e) => setStdID(Math.max(0, parseInt(e.target.value) ).toString().slice(0,10))} onKeyDown={handleKeyDown} 
                        value={stdID} autoFocus 
                    />
                    <Button variant="contained" color="primary" onClick={submitRequest} disabled={(stdID.length !== 10)}>
                        ลงทะเบียน
                    </Button>
                </form>
            </Paper>
        </div>
    )
}

export default Register;