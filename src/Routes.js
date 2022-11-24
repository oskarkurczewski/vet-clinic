import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { ServicesPage } from "./pages/services/ServicesPage";
import { AboutPage } from "./pages/about/AboutPage";


export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<MainPage />}/>
         <Route path="services" element={<ServicesPage />}/>
         <Route path="about" element={<AboutPage />}/>
      </Routes>
   )
}