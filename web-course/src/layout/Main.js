import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSideNav from '../components/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className='mt-3'>
                    <Col lg='3'>
                    <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;