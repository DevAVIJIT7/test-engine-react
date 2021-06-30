import React from 'react';
import PropTypes from 'prop-types';
import TestCard from '../TestCard/TestCard';

const TestList = ({ tests }) => (
  <div className="test-box shadow">
    <div className="card-deck">
      <TestCard tests={tests} />
    </div>
  </div>
);

TestList.defaultProps = {
  tests: [],
};

TestList.propTypes = {
  tests: PropTypes.shape([]),
};

export default TestList;
