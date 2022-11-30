import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [category,setCategory ] = useState([]);

  // console.log(category);

  useEffect(() => {
    fetch("https://web-course-data-server.vercel.app/courseCategory")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h3>All Category List</h3>
      {category.map((name) => (
        <div className="pb-3" key={name.categoryId}>
          <ListGroup>
           <Link to={`/category/${name.categoryId}`}> <ListGroup.Item>{name.categoryName}</ListGroup.Item></Link>
          </ListGroup>
        </div>
        
      ))}
    </div>
  );
};

export default LeftSideNav;
