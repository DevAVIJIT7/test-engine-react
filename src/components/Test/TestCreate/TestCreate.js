import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Header from '../../Header/Header';
import './TestCreate.css';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { DateTimePicker } from 'react-widgets';
import "react-widgets/dist/css/react-widgets.css";

Moment.locale('en');
momentLocalizer();

class TestCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: {
        title: '',
        selectedStudent: ''
      }
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label htmlFor={label}>{ label }</label>
        <input {...input} className="form-control"/>
      </div>
    )
  }

  renderDateTimePicker = ({ input, label, meta }) => {
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <DateTimePicker 
          name={input.name}
          defaultValue={new Date()}
        />
      </div>
    )
  }

  renderSelect = ({ input, label, meta, options }) => {
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <select
          {...input}
          className="custom-select"
        >
          <option defaultValue={this.state.test.selectedStudent} disabled value="">Choose...</option>
          {options.map(student => <option key={student.id} value={student.id}>{student.name}</option>)}
        </select>
      </div>
    );
  }

  renderTextArea = ({input, label, meta, rows}) => {
    return (
      <div className="col-md-12 mb-3">
        <label htmlFor={label}>{label}</label>
        <textarea className="form-control" rows={rows}></textarea>
      </div>
    )
  }

  renderOptions = ({input, label, meta}) => {
    return (
      <div className="col-md-3 mb-3">
        <label htmlFor={label}>{label}</label>
        <input {...input} className="form-control"/>
      </div>
    )
  }

  students = () => {
    return [
      { name: "Student1", id: 1 },
      { name: "Student2", id: 2 }
    ];
  }

  changeTitle = (e) => {
    this.setState({test: {title: e.target.value}})
  }

  onSubmit = (formValues) => {
    this.props.signIn(formValues)
  }

  render() {
    return (
      <div>
        <Header /> 
        <div className="test-create-box shadow row">
          <div className="col-lg-7">
            <form>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <Field name="title" label="Title" value={this.state.title} component={this.renderInput} onChange={this.changeTitle}/>
                </div>
                <div className="col-md-4 mb-3">
                  <Field name="start_date" label="Start Date" component={this.renderDateTimePicker} />
                </div>
                <div className="col-md-4 mb-3">
                  <Field name="end_date" label="End Date" component={this.renderDateTimePicker} />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-8 mb-3">
                  <Field name="description" label="Description" component={this.renderInput} />
                </div>
                <div className="col-md-4 mb-3">
                  <Field name="students[]" label="Select Students" component={this.renderSelect} options={this.students()}/>
                </div>
              </div>
              <div className="form-row">
                <Field name="question" label="Question" component={this.renderTextArea} rows="10"/>
                <Field name="option1" label="Option1" component={this.renderOptions} />
                <Field name="option2" label="Option1" component={this.renderOptions} />
                <Field name="option3" label="Option1" component={this.renderOptions} />
                <Field name="option4" label="Option1" component={this.renderOptions} />
              </div>
              <button className="btn btn-success float-right mt-3" type="submit">Save</button>
            </form>
          </div>
          <div className="col-lg-1 vertical-line"></div>
          <div className="col-lg-4">
            <h2>{this.state.test.title}</h2>
          </div>
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
  return { token: state.auth.token, user: state.auth.user, tests: state.test.tests  }
}

const TestForm = connect(mapStateToProps, { })(TestCreate);

export default reduxForm({
  form: 'testCreateForm',
  validate
})(TestForm);
