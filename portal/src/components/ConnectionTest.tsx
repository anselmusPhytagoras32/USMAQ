import React, { useState } from 'react';
import { Button, Alert } from '@mui/material';

const ConnectionTest = () => {
    const [message, setMessage] = useState("Waiting for test...");

    const checkBackend = async () => {
        try {
            // Ask the backend for data
            // The Vite Proxy handles the rest
            const response = await fetch('/api/test');

            // Turn the answer into text
            const text = await response.text();

            // Output
            setMessage(text);
        } catch (error) {
            setMessage("Error: Could not connect to backend.");
            console.error(error);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px dashed grey' }}>
            <h3>System Check</h3>
            <Button variant="contained" onClick={checkBackend}>
                Test Connection
            </Button>

            <Alert severity="info" sx={{ marginTop: 2 }}>
                Result: {message}
            </Alert>
        </div>
    );
};

export default ConnectionTest;