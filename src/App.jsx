import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Calendar from "./components/Calendar";
import EventDay from "./components/EventDay";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Calendar />
              <Footer />
            </main>
          }
        />
        <Route
          path="/day/:dayid"
          element={
            <main>
              <EventDay />
              <ToTop />
              <Footer />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
