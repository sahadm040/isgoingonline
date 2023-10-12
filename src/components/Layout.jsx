import React from "react";
import NavBar from "./Navbar";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
// import { Counter } from "./Counter";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {/* <Container fluid> */}
        <Container fluid style={{ backgroundColor: "#ffc800" }} className="py-4">
        {children}
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
