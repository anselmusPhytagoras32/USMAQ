import React from 'react';
import {
    Box, Button, Container, TextField, Typography, Paper, Link, Grid, CssBaseline
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Login = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f4f8', // Soft medical grey-blue background
                padding: 2
            }}
        >
            <CssBaseline />
            <Container component="main" maxWidth="xs">
                <Paper
                    elevation={6}
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 4,
                        borderRadius: 3, // Soft rounded corners
                    }}
                >
                    {/* Logo */}
                    <Box sx={{
                        m: 1,
                        bgcolor: 'primary.main',
                        color: 'white',
                        p: 1.5,
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <LocalHospitalIcon fontSize="large" />
                    </Box>

                    <Typography component="h1" variant="h5" sx={{ fontWeight: 600, mt: 1, color: '#1a3c5e' }}>
                        USMAQ Portal
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                        Unified System for Medical Access & Quality
                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address / Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 3, mb: 2, py: 1.2, fontWeight: 'bold' }}
                        >
                            Sign In
                        </Button>

                        <Grid container justifyContent="center">
                            <Grid>
                                <Link component={RouterLink} to="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>

                <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 4 }}>
                    © 2026 USMAQ Hospital System. Secure Access Only.
                </Typography>
            </Container>
        </Box>
    );
};

export default Login;