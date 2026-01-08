import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from './NavBar.tsx';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Top Header */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        USMAQ Hospital System
                    </Typography>
                </Toolbar>
            </AppBar>

            <Sidebar />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar /> {/* Spacer for the header */}
                {children}
            </Box>
        </Box>
    );
};

export default Layout;