import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import TestCard from './TestList/TestList';
import { fetchUser, fetchTests } from '../../actions';
import './Test.css';

class Test extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchTests();
  }

  render() {
    return (
      <div>
        <Header />      
        <TestCard tests={this.props.tests} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.auth.token, user: state.auth.user, tests: state.test.tests  }
}

export default connect(mapStateToProps, { fetchUser, fetchTests})(Test);
