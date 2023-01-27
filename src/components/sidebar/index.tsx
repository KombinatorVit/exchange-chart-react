import React from 'react';
import {useStyles} from "./styles";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material';

const SidebarComponent = (props: any) => {

    const {isNonMobile, drowerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()

    return (
        <div>

        </div>
    );
};

export default SidebarComponent;