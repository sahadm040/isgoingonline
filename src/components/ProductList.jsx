import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { allList } from "../store/api/post.route";
import { Link } from "react-router-dom";

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
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  className="d-flex justify-content-center"
                >
                  <Link to={`/product/${item.id}`}>
                    <Card
                      border="secondary"
                      style={{ width: "18rem", minHeight: "250px" }}
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
                        <Card.Text className="m-0">
                          Price : {item?.price}
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                          <Row>
                            <Col md={6} className="p-2">
                              <Button variant="primary">
                                Add to
                                <i
                                  className="fa fa-shopping-cart mx-1"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                            </Col>
                            <Col md={6} className="p-2">
                              {" "}
                              <Button variant="primary">
                                Add to
                                <i
                                  className="fa fa-shopping-cart mx-1"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
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
