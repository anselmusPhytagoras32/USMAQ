import React, { useState } from 'react';
import {
    Box, Typography, Button, TextField, Paper, Table,
    TableBody, TableCell, TableHead, TableRow, IconButton,
    Dialog, DialogTitle, DialogContent, DialogActions, Grid,
    MenuItem, InputAdornment, Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';

// Mock Data
const MOCK_PATIENTS = [
    { id: 1, name: 'Juan Dela Cruz', age: 45, sex: 'Male', address: 'Legazpi City', lastVisit: '2024-12-01' },
    { id: 2, name: 'Maria Clara', age: 28, sex: 'Female', address: 'Daraga, Albay', lastVisit: '2025-01-10' },
];

const Patient = () => {
    const [patients, setPatients] = useState(MOCK_PATIENTS);
    const [search, setSearch] = useState('');
    const [openRegister, setOpenRegister] = useState(false);

    // Form State (Captured all standard hospital fields)
    const [formData, setFormData] = useState({
        firstName: '', middleName: '', lastName: '',
        dob: '', age: '', sex: '', civilStatus: '',
        address: '', phone: '', philHealth: '',
        emergencyName: '', emergencyPhone: '',
        previousHospital: '', previousDiagnosis: ''
    });

    // Filter Logic
    const filteredPatients = patients.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Box>
            {/* HEADER */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Typography variant="h5" fontWeight="600">Patient Records</Typography>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<AddIcon />}
                    onClick={() => setOpenRegister(true)}
                >
                    New Admission
                </Button>
            </Box>

            {/* SEARCH */}
            <Paper sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center' }}>
                <SearchIcon sx={{ color: 'text.secondary', mr: 2 }} />
                <TextField
                    fullWidth
                    variant="standard"
                    placeholder="Search by Name, PhilHealth ID, or Date of Birth..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                />
            </Paper>

            {/* TABLE */}
            <Paper>
                <Box sx={{ overflowX: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}><b>ID</b></TableCell>
                                <TableCell><b>Full Name</b></TableCell>
                                <TableCell><b>Age / Sex</b></TableCell>
                                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}><b>Address</b></TableCell>
                                <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' } }}><b>Last Visit</b></TableCell>
                                <TableCell align="right"><b>Actions</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredPatients.map((row) => (
                                <TableRow key={row.id} hover>
                                    <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{row.id}</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>{row.name}</TableCell>
                                    <TableCell>{row.age} / {row.sex}</TableCell>
                                    <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>{row.address}</TableCell>
                                    <TableCell sx={{ display: { xs: 'none', lg: 'table-cell' } }}>{row.lastVisit}</TableCell>
                                    <TableCell align="right">
                                        <IconButton color="primary" size="small"><EditIcon /></IconButton>
                                        <IconButton color="error" size="small"><DeleteIcon /></IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Paper>

            {/* --- REGISTRATION FORM (The Update) --- */}
            <Dialog open={openRegister} onClose={() => setOpenRegister(false)} fullWidth maxWidth="md">
                <DialogTitle sx={{ bgcolor: '#1976d2', color: 'white' }}>
                    Patient Registration Form
                </DialogTitle>

                <DialogContent dividers>
                    <Grid container spacing={2} sx={{ mt: 1 }}>

                        {/* SECTION 1: IDENTITY */}
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>I. PERSONAL INFORMATION</Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label="First Name" name="firstName" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label="Middle Name" name="middleName" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label="Last Name" name="lastName" onChange={handleChange} required />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth type="date" label="Date of Birth" name="dob"
                                InputLabelProps={{ shrink: true }} onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <TextField fullWidth label="Age" name="age" type="number" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <TextField select fullWidth label="Sex" name="sex" defaultValue="" onChange={handleChange}>
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField select fullWidth label="Civil Status" name="civilStatus" defaultValue="" onChange={handleChange}>
                                <MenuItem value="Single">Single</MenuItem>
                                <MenuItem value="Married">Married</MenuItem>
                                <MenuItem value="Widowed">Widowed</MenuItem>
                            </TextField>
                        </Grid>

                        {/* SECTION 2: CONTACT & GOV */}
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <Divider />
                            <Typography variant="subtitle2" color="primary" sx={{ mt: 2, mb: 1 }}>II. CONTACT & ADDRESS</Typography>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <TextField fullWidth label="Permanent Address (House No, Street, Brgy, City)" name="address" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label="Contact Number (+63)" name="phone" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="PhilHealth Number" name="philHealth" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Emergency Contact Name & Phone" name="emergency" onChange={handleChange} />
                        </Grid>

                        {/* SECTION 3: PREVIOUS VISITS */}
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <Divider />
                            <Typography variant="subtitle2" color="primary" sx={{ mt: 2, mb: 1 }}>III. MEDICAL HISTORY (Optional)</Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Previous Hospital / Clinic Visited"
                                name="previousHospital"
                                placeholder="e.g. BRHMC, Estevez"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Previous Date of Visit"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                name="previousDate"
                            />
                        </Grid>

                    </Grid>
                </DialogContent>

                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setOpenRegister(false)} color="inherit">Cancel</Button>
                    <Button onClick={() => setOpenRegister(false)} variant="contained" size="large">
                        Register Patient
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Patient;