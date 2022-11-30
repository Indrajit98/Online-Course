import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CourseCart from "./CourseCart";


const CourseCategory = ({ n }) => {
  const categoryCourse = useLoaderData();
  const [name, setName] = useState();

  for (let id of categoryCourse) {
    if (name !== id.categoryName) {
      return setName(id.categoryName);
    }
  }
  
  return (
    <div>
      <h1>
        {categoryCourse.length === 0  ? "Live Course " : name } { categoryCourse.length}
      </h1>
      <p>{categoryCourse.categoryName}</p>
      <div className="row g-2 w-full">
        {categoryCourse.map((p) => (
          <CourseCart key={p.id} course={p}></CourseCart>
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
