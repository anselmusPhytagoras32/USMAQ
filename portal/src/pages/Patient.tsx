import React, { useState } from 'react';
import {
    Box, Typography, Button, TextField, Paper, Table,
    TableBody, TableCell, TableHead, TableRow, IconButton,
    Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';

// To be removed later
const MOCK_PATIENTS = [
    { id: 1, name: 'Juan Dela Cruz', age: 45, address: 'Legazpi City', phone: '0917-111-2222' },
    { id: 2, name: 'Maria Clara', age: 28, address: 'Daraga, Albay', phone: '0918-333-4444' },
    { id: 3, name: 'Jose Rizal', age: 35, address: 'Tabaco City', phone: '0919-555-6666' },
];

const Patient = () => {
    const [patients, setPatients] = useState(MOCK_PATIENTS);
    const [search, setSearch] = useState('');
    const [openRegister, setOpenRegister] = useState(false);

    // Filter Logic
    const filteredPatients = patients.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    // Delete Logic
    const handleDelete = (id: number) => {
        if(window.confirm("Are you sure you want to delete this record?")) {
            setPatients(patients.filter(p => p.id !== id));
        }
    };

    return (
        <Box>
            {/* HEADER WITH SEARCH AND ADD BUTTON */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, alignItems: 'center' }}>
                <Typography variant="h5" fontWeight="600">Patient Records</Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setOpenRegister(true)}
                >
                    Register Patient
                </Button>
            </Box>

            {/* SEARCH BAR */}
            <Paper sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center' }}>
                <SearchIcon sx={{ color: 'text.secondary', mr: 2 }} />
                <TextField
                    fullWidth
                    variant="standard"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                />
            </Paper>

            {/* PATIENT TABLE */}
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Contact</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPatients.length > 0 ? filteredPatients.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>{row.name}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell align="right">
                                    <IconButton color="primary"><EditIcon /></IconButton>
                                    <IconButton color="error" onClick={() => handleDelete(row.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center">No patients found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>

            {/* REGISTER MODAL (Simple UI) */}
            <Dialog open={openRegister} onClose={() => setOpenRegister(false)} fullWidth maxWidth="sm">
                <DialogTitle>Register New Patient</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Full Name" fullWidth variant="outlined" sx={{ mb: 2 }} />
                    <TextField margin="dense" label="Age" type="number" fullWidth variant="outlined" sx={{ mb: 2 }} />
                    <TextField margin="dense" label="Address" fullWidth variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenRegister(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => setOpenRegister(false)}>Register</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Patient;