// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import db from "../util/MockDB";
import axios from "axios";
import Thread from "../components/Thread";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// Styling
import '../styles/HomePage.css';

function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/users/1")
            .then((response) => setData(response.data))
            .catch((error) => {
                // console.log(error)
                setData(db)
            });
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <Thread />
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default HomePage;
