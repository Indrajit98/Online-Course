import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCart from "./CourseCart";

const Home = () => {
  const allCourse = useLoaderData();
  return (
    <div>
      <div className="row g-2">
        {allCourse.map((p) => (
          <CourseCart key={p.id} course={p}></CourseCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
