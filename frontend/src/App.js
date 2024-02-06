import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
