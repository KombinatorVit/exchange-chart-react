import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hooks";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext, tokens} from "../../theme";
import {useStyles} from "./styles";

const TopBarComponent = () => {


    const {user} = useAppSelector(state => state.auth.user)
    console.log(user)

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    return (
        <Box className={classes.root} sx={{ flexGrow: 1 }}>
            <Grid>Welcome {user?.firstName}</Grid>
            <Box display='flex'>

                <Grid onClick={colorMode.toggleColorMode}>
                    <IconButton>
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>
                <Grid sx={{
                    display: 'flex', backgroundColor: `${colors.primary[600]}`,

                    borderRadius: '8px'
                }}>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase placeholder={'Поиск'}/>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;