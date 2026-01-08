import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import the icon
import Sidebar from "./Sidebar.tsx";
import AccountMenu from "@/components/AccountMenu.tsx";
import SearchAppBar from "@/components/SearchBar.tsx";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    {/* LEFT: Menu Icon + Title */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* The 3 Lines (Menu Icon) */}
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" noWrap component="div">
                            USMAQ Hospital System
                        </Typography>
                    </Box>

                    {/* MIDDLE: Search Bar (Now it's just the input) */}
                    <SearchAppBar />

                    {/* RIGHT: Account Menu */}
                    <AccountMenu />

                </Toolbar>
            </AppBar>

            <Sidebar />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;