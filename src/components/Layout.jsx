import React from "react";
import NavBar from "./Navbar";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Container fluid className="py-4">
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
