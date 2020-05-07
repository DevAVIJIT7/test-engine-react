import React from 'react';
import TestCard from '../TestCard/TestCard';

const TestList = (props) => {
  return (
    <div className="test-box shadow">
      <div className="card-deck">
        <TestCard tests={props.tests} />
      </div>
    </div>
  )
}

export default TestList;