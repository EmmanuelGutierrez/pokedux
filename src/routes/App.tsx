import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import Home from "../containers/Home";
import { ThemeProvider } from "@mui/system";
import { theme } from "./AppStyles";

/* const inputGlobalStyles = <GlobalStyles styles={theme} />; */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
