import React from 'react';
import {Button, TextField, Typography} from "@mui/material";

const RegisterPage = () => {
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации </Typography>
            <TextField fullWidth={true} margin='normal' label="Ваше имя" variant="outlined" placeholder="Введите ваше имя"/>
            <TextField fullWidth={true} margin='normal' label="Ваш username" variant="outlined" placeholder="Введите ваш username"/>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder="Введите ваш email"/>
            <TextField fullWidth={true} margin='normal' type={"password"} label="Password" variant="outlined" placeholder="Введите ваш пароль"/>
            <TextField fullWidth={true} margin='normal' type={"password"} label="Password" variant="outlined" placeholder="Повторите ваш пароль"/>
            <Button sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom:2, width: '60%'}} variant="contained">Зарегестрироваться</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}}> У вас есть аккаунт?<span className='incitingText'>Авторизация</span>
            </Typography>

        </>
    );
};

export default RegisterPage;