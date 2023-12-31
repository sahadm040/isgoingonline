import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { allList } from "../store/api/post.route";
import { Link } from "react-router-dom";
import { increment } from "../store/slices/postSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const [postListView, setPostListView] = useState();
  console.log("characterListView", postListView);

  useEffect(() => {
    dispatch(allList());
  }, [dispatch]);
  const { productViewArray, loading } = useSelector((state) => state.post);
  useEffect(() => {
    setPostListView(productViewArray);
  }, [productViewArray]);
  const handleAddToCart = (e) => {
    e.preventDefault();
    // dispatch(addToCart(character)); // Dispatch the addToCart action with the product details
    dispatch(increment());
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
            <h3 className="px-2">products</h3>
            <Row>
              {postListView?.map((item, key) => (
                <Col
                  key={key}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  className="d-flex justify-content-center"
                >
                  <Card
                    border="secondary"
                    style={{ width: "18rem", height: "25rem" }}
                    className="small-text m-4 text-center d-flex align-items-center shadow "
                  >
                    <Card.Img
                      className="px-4 mt-4 py-4 border "
                      variant="top"
                      src={item?.image}
                      style={{ height: "150px", width: "50%" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        {item?.title?.split(" ").slice(0, 3).join(" ")}
                      </Card.Title>

                      <div className="d-flex justify-content-center">
                        <p>
                          <Badge bg="success">
                            {item?.rating?.rate}{" "}
                            <span aria-label="star" role="img">
                              ★
                            </span>
                          </Badge>
                        </p>
                        <p className="mx-3">Count : {item?.rating?.count}</p>
                      </div>
                      <Card.Text>
                        {" "}
                        <strong>Price : $ {item?.price}</strong>
                      </Card.Text>
                      <Link to={`/product/${item.id}`}>
                        <Button variant="success">view product</Button>
                      </Link>
                      <Button
                        variant="primary"
                        className="m-2"
                        onClick={handleAddToCart}
                      >
                        add to
                        <i
                          className="fa fa-shopping-cart mx-1"
                          aria-hidden="true"
                        ></i>{" "}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </Layout>
    </div>
  );
};

export default ProductList;
