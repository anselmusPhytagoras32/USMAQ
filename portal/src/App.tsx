import "./App.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BaseForm from "./components/BaseForm.tsx";
import {Button} from "@mui/material";
import Home from "./pages/Home.tsx";

function App(){
    return(
        <main>
            <h1>USMAQ</h1>
            <BaseForm/>

            <BrowserRouter>
                <nav>
                    <Link to ="/">Home</Link> |{' '}
                </nav>
              <Routes>
                    <Route path="/" element={<Home/>} />
              </Routes>
            </BrowserRouter>



        </main>
);

}
export default App;
