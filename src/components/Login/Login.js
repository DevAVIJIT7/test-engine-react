import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signIn } from '../../actions';
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css';

class Login extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      console.log(error)
      return (
        <div className="validationError">{error}</div>
      )
    }
  }

  renderServerError(errors) {
    if (errors) {
      return (
        <div className="alert alert-danger" role="alert">
          {errors.message}
        </div>
      )
    }
  }

  renderIcon(iconName) {
    if (iconName === 'At') {
      return <FontAwesomeIcon icon={faAt} />;
    } else if (iconName === 'Lock') {
      return <FontAwesomeIcon icon={faLock} />;
    }
  }

  renderInput = ({ input, label, placeholder, iconName, meta }) => {
    return (
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              {this.renderIcon(iconName)}
            </div>
          </div>
          <input {...input} className="form-control" placeholder={placeholder} />
        </div>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.signIn(formValues)
  }

  render() {
    return (
      <div className="container login-box">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h1>Test Engine</h1>
          {this.renderServerError(this.props.signInErrors)}
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="email" component={this.renderInput} iconName="At" placeholder="Email" />
            <Field name="password" component={this.renderInput} iconName="Lock" placeholder="Password" />
            <button className="btn btn-success shadow">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "You must enter your email.";
  }

  if (!formValues.password) {
    errors.password = "You must enter your Password.";
  }

  return errors;
}

const mapStateToProps = (state) => {
  return { signInErrors: state.auth.signInErrors }
}

const LoginForm = connect(mapStateToProps, { signIn })(Login);

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);