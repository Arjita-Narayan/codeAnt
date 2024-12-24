import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import logo from "../Assets/images.jpeg";

function Welcome() {
  const navigate = useNavigate();

  // Add state to track which button is clicked
  const [selectedOption, setSelectedOption] = useState("saas");

  // Handle SAAS button click
  const handleSaasClick = () => {
    setSelectedOption("saas");
  };

  // Handle Self Hosted button click
  const handleSelfHostedClick = () => {
    setSelectedOption("selfHosted");
  };

  const handleGithubClick = () => {
    navigate("/Repo");
  };

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${logo}) `,
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row className="w-100">
          {/* Left Side Section */}
          <Col
            xs={12}
            md={6}
            lg={6}
            className="text-center d-flex align-items-center justify-content-center d-none d-md-flex"
          >
            <div>
              <div style={{ position: "relative" }}>
                {/* First Card */}
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    borderRadius: "20px",
                  }}
                >
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <img
                        src={logo}
                        alt="Logo"
                        style={{
                          width: "18px",
                          height: "18px",
                          marginRight: "-2px",
                        }}
                      />
                      <b>AI To Detect And Autofix Bad Code</b>
                    </ListGroup.Item>

                    <ListGroup.Item style={{ height: "150px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <b>30+</b>
                          <div style={{ marginTop: "5px", fontSize: "0.8rem" }}>
                            Language Support
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <b>10k+</b>
                          <div style={{ marginTop: "5px", fontSize: "0.8rem" }}>
                            Text below 10k+
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <b>100k+</b>
                          <div style={{ marginTop: "5px", fontSize: "0.8rem" }}>
                            Text below 100k+
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>

                {/* Second Card (Overlapping from right-bottom) */}
                <Card
                  style={{
                    width: "10rem",
                    height: "8rem",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    border: "none",
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: "-80px",
                    right: "-20px",
                    zIndex: 1,
                  }}
                >
                  <ListGroup variant="flush">
                    <ListGroup.Item style={{ position: "relative" }}>
                      <div style={{ textAlign: "left", paddingLeft: "10px" }}>
                        <i
                          className="fa-solid fa-chart-pie"
                          style={{
                            color: "#B197FC",
                            fontSize: "1.5rem",
                            marginRight: "8px",
                          }}
                        ></i>
                        <br />
                        <b style={{ fontSize: "0.8rem" }}>Issues Fixed</b>
                        <br />
                        <h3 style={{ marginTop: "5px" }}>500K+</h3>
                      </div>

                      {/* Right Corner Icon */}
                      <div
                        style={{
                          position: "absolute",
                          top: "2px",
                          right: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <i
                            className="fa-solid fa-up-long"
                            style={{
                              fontSize: "0.6rem",
                              color: "#0049C6",
                              marginRight: "1px",
                            }}
                          ></i>
                          <p
                            style={{
                              fontSize: "0.6rem",
                              color: "#0049C6",
                              margin: "0",
                            }}
                          >
                            14%
                          </p>
                        </div>
                        <span style={{ fontSize: "0.6rem", marginTop: "-1px" }}>
                          this week
                        </span>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </div>
          </Col>

          {/* Right Side Content */}
          <Col xs={12} md={6} lg={6} className="text-center">
            <div
              className="code"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    borderRadius: "50%",
                  }}
                />
                <h2
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "lighter",
                    margin: 0,
                  }}
                >
                  CODEANT AI
                </h2>
              </div>

              <h3>
                <b>WELCOME TO CODEANT AI</b>
              </h3>
              <div className="option">
                <Button
                  variant="light"
                  className="mb-2"
                  onClick={handleSaasClick}
                >
                  SAAS
                </Button>
                <Button
                  variant="light"
                  className="mb-2"
                  onClick={handleSelfHostedClick}
                >
                  Self Hosted
                </Button>
              </div>
            </div>

            <div
              className="options d-flex flex-column"
              style={{ height: "200px", overflow: "hidden" }}
            >
              {selectedOption === "saas" && (
                <>
                  <Button
                    variant="light"
                    className="mb-2"
                    onClick={handleGithubClick}
                  >
                    <i className="fa-brands fa-github me-2"></i>Sign in with
                    Github
                  </Button>
                  <Button variant="light" className="mb-2">
                    <i
                      className="fa-brands fa-bitbucket"
                      style={{ color: "#0b6cb7", marginRight: "8px" }}
                    ></i>
                    Sign in with Bitbucket
                  </Button>
                  <Button variant="light" className="mb-2">
                    <i
                      className="fa-solid fa-recycle me-2"
                      style={{ color: "#1d52af" }}
                    ></i>
                    Sign in with Azure DevOps
                  </Button>
                  <Button variant="light">
                    <i className="fa-brands fa-gitlab me-2"></i>Sign in with
                    GitLab
                  </Button>
                </>
              )}

              {selectedOption === "selfHosted" && (
                <>
                  <Button variant="light" className="mb-2">
                    <i className="fa-brands fa-gitlab me-2"></i>Self Hosted
                    GitLab
                  </Button>
                  <Button variant="light" className="mb-2">
                    <i className="fa-solid fa-key me-2"></i>Sign in with SSO
                  </Button>
                </>
              )}
            </div>
            
            {/* Add Privacy Policy Text */}
            <p style={{ marginTop: "20px", fontSize: "0.8rem", color: "#666" }}>
              By signing up you agree to the{" "}
              <b privacy-policy style={{ color: "#000000" }}>
                Privacy Policy
              </b>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Welcome;
