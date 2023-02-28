import React, {FC} from 'react';
import {TextField, Typography} from "@mui/material";
import {LoginPageType} from "../../../common/types/auth";
import {useStyles} from "./styles";
import AppLoadingButton from "../../../components/loading-button";


const LoginPage: FC<LoginPageType> = ({navigate, register, errors, loading}): JSX.Element => {

    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" textAlign='center' fontSize={32}>Авторизация </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите ваш логин и
                пароль </Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email',)}
            />
            <TextField fullWidth={true}
                       error={!!errors.password}

                       margin='normal'
                       type={'password'}
                       label="Password"
                       variant="outlined"
                       placeholder="Введите ваш пароль"
                       helperText={errors.password ? `${errors.password.message}` : ''}

                       {...register('password',)}
            />
            <AppLoadingButton loading={loading} type='submit' sx={{marginTop: 2, marginBottom: 2, width: '60%'}}
                              variant="contained">Войти</AppLoadingButton>
            <Typography variant="body1"> У вас нет аккаунта?<span
                className={classes.incitingText} onClick={() => navigate('/register')}>Регистрация</span>
            </Typography>

        </>
    );
};

export default LoginPage;