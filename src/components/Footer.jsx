import { Col, Row } from "react-bootstrap";
import {
  card_maestro_payment,
  finance_logo_payment_paypoint,
  finance_logo_payment_worldpay,
  finance_payment_paypal,
  finance_payment_visa,
  master_method_card,
} from "./images";

const Footer = () => {
  return (
    <footer className=" text-light ">
      <div className="container py-2">
        <div className="row">
          <div className="col-md-4">
            <div className="my-1 p-1 d-flex flex-column align-items-center justify-content-between">
              <div className="icon">
                <a href="/">
                  <h5>
                    SH
                    <span>opne</span>ST
                  </h5>
                </a>
              </div>
            </div>
            <p className="small-text">
              An e-commerce company sells goods or services online, connecting
              buyers and sellers through digital platforms and websites.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="text-secondary">Quick Links</h4>
            <ul className="list-unstyled small-text">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="#contact">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 small-text">
            <h4 id="contact" className="text-secondary">
              Contact Us
            </h4>
            <address>
              <p>1234 Main Street</p>
              <p>City, State ZIP</p>
              <p>
                Email: <a href="mailto:info@example.com">info@example.com</a>
              </p>
              <p>
                Phone: <a href="tel:+1234567890">123-456-7890</a>
              </p>
            </address>
          </div>
        </div>

        <div className=" d-flex justify-content-center">
          <Row>
            <Col lg={6} sm={6} xs={12}>
              <img
                src={card_maestro_payment}
                style={{ width: "50px", height: "50px", margin: "10px" }}
                alt="card_maestro_payment"
              />
              <img
                src={finance_logo_payment_paypoint}
                style={{ width: "50px", height: "50px", margin: "10px" }}
                alt="finance_logo_payment_paypoint"
              />
              <img
                src={finance_logo_payment_worldpay}
                style={{ width: "50px", height: "50px", margin: "10px" }}
                alt="finance_logo_payment_worldpay"
              />
            </Col>
            <Col lg={6} sm={6} xs={12}>
              <img
                src={finance_payment_paypal}
                style={{ width: "50px", height: "50px", margin: "10px" }}
                alt="finance_payment_paypal"
              />
              <img
                src={master_method_card}
                style={{ width: "50px", height: "50px", margin: "10px" }}
                alt="master_method_card"
              />
              <img
                src={finance_payment_visa}
                style={{ width: "50px", height: "50px", margin: "10px" }}
                alt="finance_payment_visa"
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="border-top border-white text-center py-1 small-text">
        <p>
          &copy; {new Date().getFullYear()} Your E-Commerce Company. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
