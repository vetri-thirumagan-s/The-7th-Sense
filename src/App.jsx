import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Analytics from "./components/Analytics/Analytics";
import Pricing from "./components/Pricing/Pricing";
import Contact_Us from "./components/ContactUs/ContactUs";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about_us" element={<AboutUs />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact_us" element={<Contact_Us />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
