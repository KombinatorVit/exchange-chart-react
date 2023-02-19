import React, {useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";
import FlexBetween from "../flex-between";
import {MenuOutlined} from "@mui/icons-material";


const TopBarComponent = (props: any) => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const {setIsOpen, isOpen} = props

    return (

        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <FlexBetween >
                    <MenuOutlined className={classes.menuIcon} onClick={()=>setIsOpen(!isOpen)}/>
                    <Typography variant={'h3'}>Welcome Vitaliy</Typography>
                </FlexBetween>
                <Box display='flex'>
                    <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
                        <IconButton className={classes.themeIcon}>
                            {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                        </IconButton>
                        <IconButton>
                            <NotificationsNoneIcon/>
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <SearchIcon/>
                        </IconButton>
                        <InputBase className={classes.searchInput} placeholder='Поиск'/>
                    </Grid>
                </Box>
            </Toolbar>

        </AppBar>

    );
};

export default TopBarComponent;