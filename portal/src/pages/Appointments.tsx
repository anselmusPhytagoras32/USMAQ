import React, { useState } from 'react';
import {
    Box, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon,
    Checkbox, Paper, Chip
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Appointments = () => {
    // Mock Data for Queue
    const [queue, setQueue] = useState([
        { id: 1, name: 'Maria Santos', reason: 'Check-up', time: '08:30 AM', done: false },
        { id: 2, name: 'Pedro Penduko', reason: 'X-Ray Result', time: '09:00 AM', done: false },
        { id: 3, name: 'Juan Dela Cruz', reason: 'Follow-up', time: '09:30 AM', done: false },
        { id: 4, name: 'Ana Reyes', reason: 'Pediatrics', time: '10:00 AM', done: false },
    ]);

    const handleToggle = (id: number) => {
        const newQueue = queue.map((item) => {
            if (item.id === id) return { ...item, done: !item.done };
            return item;
        });
        setQueue(newQueue);
    };

    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Today's Appointments
            </Typography>

            <Paper>
                <List>
                    {queue.map((item) => (
                        <ListItem
                            key={item.id}
                            divider
                            disablePadding
                            sx={{
                                opacity: item.done ? 0.5 : 1,
                                textDecoration: item.done ? 'line-through' : 'none',
                                bgcolor: item.done ? '#f5f5f5' : 'white'
                            }}
                        >
                            <ListItemButton onClick={() => handleToggle(item.id)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={item.done}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>

                                <ListItemText
                                    primary={
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                {item.name}
                                            </Typography>
                                            <Chip
                                                label={item.time}
                                                size="small"
                                                icon={<CalendarTodayIcon />}
                                                color="info"
                                                variant="outlined"
                                            />
                                        </Box>
                                    }
                                    secondary={`Reason: ${item.reason}`}
                                />

                                {item.done && <Chip label="COMPLETED" color="success" size="small" />}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default Appointments;