import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Settings from "@/pages/Settings";
import Layout from "@/components/Layout";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Patient" element={<Patient/>} />
                    <Route path="/Settings" element={<Settings/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;