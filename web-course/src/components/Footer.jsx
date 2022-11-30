import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container my-5">
        <div>
            <Row>
                <div className="fs-5">Online course</div>
                <div>
                    <Link className="px-3 text-decoration-none" to = '/'>About</Link>
                    <Link className="px-3 text-decoration-none" to = '/'>Home</Link>
                    <Link className="px-3 text-decoration-none" to = '/'>Course</Link>
                    <Link className="px-3 text-decoration-none" to = '/'>Contact</Link>
                </div>
                <p className="pt-2">© 2021 Copyright: Online Course</p>

            </Row>
        </div>
    </div>
  );
};

export default Footer;
