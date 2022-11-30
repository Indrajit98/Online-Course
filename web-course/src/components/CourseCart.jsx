import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style/Course.css"

const CourseCart = ({ course }) => {
  const { title, img ,id,price} = course;
  // console.log(id)
  // style={{ width: "16rem",height:'20rem'}}
  return (
    <div className=" col-md-4 text-start position-relative ">
      <Card  className='box'style={{height:'20rem'}}  >
        <Card.Img style={{height:'10rem'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mb-5">
           <> <FaRegMoneyBillAlt></FaRegMoneyBillAlt> {price} </>
          </Card.Text>
          <Link to={`/courseDetails/${id}`}><Button className="position-absolute bottom-0 start-50 translate-middle-x mb-3 mt-4 button " variant="primary">Course Access</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCart;
