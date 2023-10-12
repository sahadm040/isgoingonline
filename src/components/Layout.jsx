import React from "react";
import NavBar from "./Navbar";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <NavBar />
      <Container fluid className="py-4" style={{ flex: 1 }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
