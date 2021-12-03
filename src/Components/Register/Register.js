import React from "react";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {


  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container fluid className="login-container">
      <Row className="h-100">
        <Col lg={7}>
          <Col
            className=" text-center d-flex align-items-center justify-content-center flex-column h-100 mx-auto"
            lg={6}
          >
            <Form onSubmit={submitHandler}>
              <h3 className="login-title">ثبت نام</h3>
              <Form.Group>
                <Form.Control
                  type="text"
                  size="lg"
                  className="mb-4 rounded-10 border-light text-secondary py-3"
                  placeholder="نام و نام خوانوادگی"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  size="lg"
                  className="mb-4 rounded-10 border-light text-secondary py-3"
                  placeholder="پست الکترونیکی"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  size="lg"
                  className="mb-4 rounded-10 border-light text-secondary py-3"
                  placeholder="رمز عبور"
                />
              </Form.Group>
              <Button
                className="d-block w-100 rounded-10 border-light py-3 mb-3 login-btn"
                type="submit"
              >
                ثبت نام
              </Button>
            </Form>

           <Link to="/"> <p>ورود به حساب کاربری</p></Link>
          </Col>
        </Col>
        <Col lg={5}>
        <div className="login-img">
            <Row>
              <Col>
                <h4>
                  به وبسایت چکانه <br /> خوش آمدید
                </h4>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
