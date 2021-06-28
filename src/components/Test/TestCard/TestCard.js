import React from 'react';

const TestCard = (props) => (
  props.tests.map((test) => (
    <div className="card mt-4" key={test._id}>
      <img className="card-img-top" src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/7056e7e8bbd8.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{test.title}</h5>
        <p className="card-text">{test.description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  ))
);

export default TestCard;
