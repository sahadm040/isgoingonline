import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import { Container } from "react-bootstrap";

const Cart = () => {
  const cart = useSelector((state) => state.post.cart);

  return (
    <div>
      <Layout>
        <Container fluid>
          <h2>Your Cart</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.title}</li>
                // Display other details of the item here
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Container>
      </Layout>
    </div>
  );
};

export default Cart;
