import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

class Dashboard extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ token: state.auth.token, user: state.auth.user, tests: state.test.tests });

export default connect(mapStateToProps, {})(Dashboard);
