import "./App.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BaseForm from "./components/BaseForm.tsx";
import {Button} from "@mui/material";
import Home from "./pages/Home.tsx";
import Patient from "./pages/Patient.tsx";

function App(){
    return(
        <main>
            <h1>USMAQ</h1>

            <BrowserRouter>
                <nav>
                    <Link to ="/">Home</Link> |{' '}
                    <Link to ="/Patient">Patient</Link> |{' '}
                </nav>
              <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Patient" element={<Patient/>} />
              </Routes>
            </BrowserRouter>

        </main>
);

}
export default App;
