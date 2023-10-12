import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleView } from "../store/api/post.route";
import Layout from "./Layout";
import { Badge, Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { addToCart } from "../store/slices/postSlice";

const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log("params", params);
  const [character, setCharacter] = useState();
  console.log("character", character);

  useEffect(
    (id) => {
      dispatch(SingleView(params.id));
    },
    [dispatch, params.id]
  );
  const { productView, loading } = useSelector((state) => state.post);
  console.log("productView", productView);
  useEffect(() => {
    setCharacter(productView);
  }, [productView]);
  const handleAddToCart = () => {
    dispatch(addToCart(character)); // Dispatch the addToCart action with the product details
  };
  return (
    <div>
      <Layout>
        {loading === "true" ? (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "70vh" }}
          >
            <Spinner animation="border" variant="success" />
          </div>
        ) : (
          <Container fluid>
            <Row className="small-text p-2">
              <Col lg={2}></Col>

              <Col
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className="d-flex justify-content-center  p-4 my-2"
              >
                <img
                  src={character?.image}
                  alt={character?.title}
                  className="img-fluid border p-4"
                  width={"80%"}
                  height={"80%"}
                />
              </Col>
              <Col
                md={6}
                className=" d-flex flex-column align-items-baseline  justify-content-center p-2 mx-3"
              >
                <h2>{character?.title}</h2>
                <p>{character?.description}</p>
                <p>Category : {character?.category}</p>
                <strong>Price : ${character?.price}</strong>
                <div className="d-flex justify-content-end">
                  <p>
                    <Badge bg="success">
                      {character?.rating?.rate}{" "}
                      <span aria-label="star" role="img">
                        ★
                      </span>
                    </Badge>
                  </p>
                  <p className="mx-3">Count : {character?.rating?.count}</p>
                </div>
                <Button onClick={handleAddToCart}>
                  Add to Cart
                  <i
                    className="fa fa-shopping-cart mx-1"
                    aria-hidden="true"
                  ></i>
                </Button>
              </Col>
            </Row>
          </Container>
        )}
      </Layout>
    </div>
  );
};

export default Product;
