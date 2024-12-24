import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Offcanvas,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";
import RepoList from "./RepoList";
import logo from "../Assets/images.jpeg";
import { useNavigate } from "react-router-dom";

function Repo() {

  const navigate = useNavigate();

  const [repositories, setRepositories] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const handleShowSidebar = () => setShowSidebar(true);
  const handleCloseSidebar = () => setShowSidebar(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch("../data/repository.json");
        const data = await response.json();
        setRepositories(data.repositories);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <Container fluid>
      <Row>
        {/* Sidebar Toggle Button for Small Screens */}
        <Button
          variant="light"
          className="d-md-none mb-3 d-flex align-items-center"
          onClick={handleShowSidebar}
        >
          <img
            src={logo}
            alt="icon"
            className="me-2"
            style={{ width: "20px", height: "20px", borderRadius: "50%" }}
          />
          CodeAnt AI
          <i className="fa-solid fa-bars ms-auto"></i>
        </Button>

        {/* Sidebar Offcanvas */}
        <Offcanvas
          show={showSidebar}
          onHide={handleCloseSidebar}
          placement="top"
          style={{ height: "50vh" }}
        >
          <Offcanvas.Header closeButton>
            <img
              src={logo}
              alt="icon"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "8px",
                borderRadius: "50%",
              }}
            />
            <Offcanvas.Title>CODEANT AI</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form.Select aria-label="User selection" className="mb-3">
              <option>UtkarshDhariyaPa..</option>
            </Form.Select>
            <Nav className="flex-column">
              <Nav.Item href="#dashboard">
                <i className="fa-solid fa-house me-2"></i>Repositories
              </Nav.Item>
              <Nav.Item href="#repositories">
                <i className="fa-solid fa-code me-2"></i>AI Code Review
              </Nav.Item>
              <Nav.Item href="#security">
                <i className="fa-solid fa-cloud me-2"></i>Cloud Security
              </Nav.Item>
              <Nav.Item href="#how-to-use">
                <i className="fa-solid fa-book me-2"></i>How To Use
              </Nav.Item>
              <Nav.Item href="#settings">
                <i className="fa-solid fa-gear me-2"></i>Settings
              </Nav.Item>
              <Nav.Item href="#support">
                <i className="fa-solid fa-phone me-2"></i>Support
              </Nav.Item>
              <Nav.Item onClick={handleLogout} href="#logout">
                <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Sidebar for Larger Screens */}
        <Col
          xs={12}
          md={3}
          lg={2}
          className="bg-light min-vh-100 p-3 d-none d-md-flex flex-column"
          style={{ position: "fixed", top: 0, left: 0 }}
        >
          <div className="d-flex align-items-center mb-3">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "20px", height: "20px", borderRadius: "20%" }}
              className="me-2"
            />
            <h5 className="m-0" style={{ fontWeight: "lighter" }}>
              CODEANT AI
            </h5>
          </div>

          <Form.Select aria-label="User selection" className="mb-3">
            <option>UtkarshDhariyaPa..</option>
          </Form.Select>
          <Nav className="flex-column flex-grow-1">
            <Nav.Item>
              <Button
                href="#dashboard"
                variant="primary"
                className="w-100 text-start"
              >
                <i className="fa-solid fa-house me-2"></i>Repositories
              </Button>
            </Nav.Item>

            <Nav.Item href="#repositories" style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-code me-2"></i>AI Code Review
            </Nav.Item>
            <Nav.Item href="#security" style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-cloud me-2"></i>Cloud Security
            </Nav.Item>
            <Nav.Item href="#how-to-use" style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-book me-2"></i>How To Use
            </Nav.Item>
            <Nav.Item href="#settings" style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-gear me-2"></i>Settings
            </Nav.Item>
          </Nav>
          <div>
            <Nav.Item href="#support" style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-phone me-2"></i>Support
            </Nav.Item>
            <Nav.Item
              onClick={handleLogout}
              href="#logout"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
            </Nav.Item>
          </div>
        </Col>

        {/* Main Content */}
        <Col
          xs={12}
          md={{ span: 9, offset: 3 }}
          lg={{ span: 10, offset: 2 }}
          className="p-3"
        >
          <ListGroup>
            <ListGroup.Item className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Repositories</h2>
                <p>{repositories.length} total repositories</p>
                <div className="input-group mt-2">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </div>
              <div className="d-flex">
                <Button variant="light" className="me-2">
                  <i className="fa-solid fa-arrows-rotate me-2"></i>Refresh
                </Button>
                <Button variant="primary">
                  <i className="fa-solid fa-plus me-2"></i>Add Repository
                </Button>
              </div>
            </ListGroup.Item>
            {repositories.length > 0 ? (
              <RepoList repositories={repositories} />
            ) : (
              <ListGroup.Item>No repositories available.</ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Repo;
