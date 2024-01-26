import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderScreen } from "./Header/HeaderScreen";

import { Home } from "@mui/icons-material";
import { Teams } from "./components/Teams";
import { About } from "./components/About";
import { VenuseScreen } from "./VenuseScreen/VenuseScreen";




export const Main = () => {
  return (
    <>
      <HeaderScreen />{" "}
      <Router>
        <Routes>
          <Route path="/venuse" element={<VenuseScreen/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};
