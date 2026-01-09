import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Settings from "@/pages/Settings";
import Layout from "@/components/Layout";
import Appointments from "@/pages/Appointments";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // We will create this

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*Public Routes*/}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* --- PROTECTED ROUTES (Wrapped in Layout) --- */}
                {/* This "wildcard" path catches everything else and applies the Layout */}
                <Route path="/*" element={
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
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