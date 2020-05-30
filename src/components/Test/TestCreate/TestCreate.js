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
      testTitle: '',
      selectedStudents: [],
      searchName: ''
    }
  }

  setStudents = (studentId) => {
    this.setState({selectedStudents: [...this.state.selectedStudents, studentId]})
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

  renderSelect = ({ input, label, meta, placeholder }) => {
    return (
      <div>
        {/* <label htmlFor={label}>{label}</label>
        <select
          {...input}
          className="custom-select"
          multiple
          value={this.state.selectedStudents}
          onChange={e => this.setStudents(e.target.value)}
        >
          {options.map(student => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select> */}
        <label htmlFor={label}>{label}</label>
        <input {...input} placeholder={placeholder} value={this.searchName} className="form-control"/>
        {this.renderStudentList()}
      </div>
    );
  }

  renderStudentList = (search) => {
    return (
      <div class="dropdown-menu show">
        {this.students().map(s => (
          <div class="items">
            <input type="checkbox" class="dropdown-item" value={s.id}/><span>{s.name}</span> 
          </div>
        ))}
      </div>
    )
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
      { name: "Student2", id: 2 },
      { name: "Student3", id: 3 },
      { name: "Student4", id: 4 },
      { name: "Student5", id: 5 }
    ];
  }

  changeTitle = (e) => {
    this.setState({testTitle: e.target.value})
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
                  <Field name="title" label="Title" value={this.state.testTitle} component={this.renderInput} onChange={this.changeTitle}/>
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
                  <Field name="students[]" label="Select Students" component={this.renderSelect} placeholder="Search names"/>
                </div>
              </div>
              <div className="form-row">
                <Field name="question" label="Question" component={this.renderTextArea} rows="10"/>
                <Field name="option1" label="Option1" component={this.renderOptions} />
                <Field name="option2" label="Option1" component={this.renderOptions} />
                <Field name="option3" label="Option1" component={this.renderOptions} />
                <Field name="option4" label="Option1" component={this.renderOptions} />
              </div>
              <button className="btn btn-success float-right mt-3" type="submit">Add Question</button>
            </form>
          </div>
          <div className="col-lg-1 vertical-line"></div>
          <div className="col-lg-4">
            <h2>{this.state.testTitle}</h2>
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
