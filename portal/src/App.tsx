import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // 1. Import Navigate
import Dashboard from "./pages/Dashboard.tsx";
import Patient from "./pages/Patient";
import Settings from "@/pages/Settings";
import Layout from "@/components/Layout";
import Appointments from "@/pages/Appointments";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* replace /login to dashboard to bypass*/}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Public Routes (No Sidebar) */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route path="/*" element={
                    <Layout>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/Patient" element={<Patient />} />
                            <Route path="/Appointments" element={<Appointments />} />
                            <Route path="/Settings" element={<Settings />} />
                        </Routes>
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;