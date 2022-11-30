import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegMoneyBillAlt, FaRegStar } from "react-icons/fa";
import ReactPrint from 'react-to-print'

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  // console.log(courseDetails);
  const { title, details, img, price, rating, categoryId } = courseDetails;
  const ref = useRef();


 

  return (
    <div>
      <Card ref={ref}>
        {/* style={{ width: "18rem" }} */}
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-lg-start">{details}</Card.Text>
          <div className="d-flex justify-content-between px-3 fs-5 align-center">
            <p>
              <FaRegMoneyBillAlt></FaRegMoneyBillAlt> Price: {price}
            </p>
            <p>
              {" "}
              <FaRegStar className="text-warning"></FaRegStar> {rating.number}{" "}
            </p>
          </div>
          <Link to={`/category/${categoryId}`}>
            <Button className="px-4 lg=w-25 mx-auto mb-3" variant="primary">
              Go Back
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <ReactPrint trigger ={()=><Button className="px-4 lg=w-25 w-full mx-auto my-3" variant="primary">
            Download PDF
          </Button>} content={() =>ref.current} ></ReactPrint>
    </div>
  );
};

export default CourseDetails;
