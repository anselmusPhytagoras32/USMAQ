import React from 'react';
import {
    Box, Button, Container, TextField, Typography, Paper, Link, Grid
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Signup = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f4f8',
                padding: 2
            }}
        >
            <Container component="main" maxWidth="sm"> {/* Slightly wider for more fields */}
                <Paper
                    elevation={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 4,
                        borderRadius: 3,
                    }}
                >
                    <Box sx={{
                        m: 1,
                        bgcolor: 'secondary.main', // Different color to distinguish from Login
                        color: 'white',
                        p: 1.5,
                        borderRadius: '50%'
                    }}>
                        <PersonAddIcon fontSize="large" />
                    </Box>

                    <Typography component="h1" variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
                        Create Account
                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid size = {{xs: 12, sm: 6}}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid size = {{xs: 12, sm: 6}}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid size = {{xs: 12}}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid size = {{xs: 12}}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 3, mb: 2, py: 1.2, fontWeight: 'bold' }}
                        >
                            Register
                        </Button>

                        <Grid container justifyContent="center">
                            <Grid>
                                <Link component={RouterLink} to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Signup;