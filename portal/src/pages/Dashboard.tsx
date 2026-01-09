import React from 'react';
import {
    Grid, Paper, Typography, Box, Card, CardContent, Table,
    TableBody, TableCell, TableHead, TableRow, Chip
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const StatCard = ({ title, value, icon, color }: any) => (
    <Card sx={{ height: '100%' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
                <Typography color="textSecondary" gutterBottom variant="subtitle2">{title}</Typography>
                <Typography variant="h4" fontWeight="bold">{value}</Typography>
            </Box>
            <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: `${color}.light`, color: `${color}.main` }}>
                {icon}
            </Box>
        </CardContent>
    </Card>
);

const Home = () => {
    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>Dashboard Overview</Typography>

            {/* TOP STATS */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size = {{xs: 12, sm: 6, md: 4}}>
                    <StatCard title="Patients in Queue" value="12" icon={<PeopleIcon />} color="warning" />
                </Grid>
                <Grid size = {{xs: 12, sm: 6, md: 4}}>
                    <StatCard title="Total Patients (Month)" value="452" icon={<AssignmentTurnedInIcon />} color="primary" />
                </Grid>
                <Grid size = {{xs: 12, sm: 6, md: 4}}>
                    <StatCard title="Active Doctors" value="3/5" icon={<MedicalServicesIcon />} color="success" />
                </Grid>
            </Grid>

            {/* QUEUE PREVIEW */}
            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Live Queue Status</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ticket #</TableCell>
                            <TableCell>Patient Name</TableCell>
                            <TableCell>Time In</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*To be removed later*/}
                        {[
                            { id: 'A-101', name: 'Maria Santos', time: '08:30 AM', status: 'In Consultation' },
                            { id: 'A-102', name: 'Juan Dela Cruz', time: '08:45 AM', status: 'Waiting' },
                            { id: 'A-103', name: 'Pedro Penduko', time: '09:00 AM', status: 'Waiting' },
                        ].map((row) => (
                            <TableRow key={row.id}>
                                <TableCell><b>{row.id}</b></TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        color={row.status === 'Waiting' ? 'warning' : 'success'}
                                        size="small"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default Home;