import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {RegisterPageType} from "../../../common/types";

const RegisterPage: React.FC<RegisterPageType> = ({
                                                      setEmail,
                                                      setPassword,
                                                      setRepeatPassword,
                                                      setFirstName,
                                                      setUsername,
                                                      navigate
                                                  }): JSX.Element => {
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для
                регистрации </Typography>
            <TextField fullWidth={true} margin='normal' label="Ваше имя" variant="outlined"
                       placeholder="Введите ваше имя" onChange={(event) => setFirstName(event.currentTarget.value)}/>
            <TextField fullWidth={true} margin='normal' label="Ваш username" variant="outlined"
                       placeholder="Введите ваш username" onChange={(event) => setUsername(event.currentTarget.value)}/>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined"
                       placeholder="Введите ваш email" onChange={(event) => setEmail(event.currentTarget.value)}/>
            <TextField fullWidth={true} margin='normal' type={"password"} label="Password" variant="outlined"
                       placeholder="Введите ваш пароль" onChange={(event) => setPassword(event.currentTarget.value)}/>
            <TextField fullWidth={true} margin='normal' type={"password"} label="Password" variant="outlined"
                       placeholder="Повторите ваш пароль"
                       onChange={(event) => setRepeatPassword(event.currentTarget.value)}/>
            <Button type={'submit'} sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}}
                    variant="contained">Зарегестрироваться</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}}> У вас есть аккаунт?<span
                className='incitingText' onClick={() => navigate('/login')}>Авторизация</span>
            </Typography>

        </>
    );
};

export default RegisterPage;