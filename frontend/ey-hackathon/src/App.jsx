import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Dummy, Navbar, Lungs } from "./components";

const App = () => {
    return (
        <>
            <Box className="app" sx={{ minHeight: "100vh" }}>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/lungs" element={<Lungs />} />
                        <Route path="/dummy" element={<Dummy />} />
                    </Routes>
                </div>
            </Box>
        </>
    );
};

export default App;
