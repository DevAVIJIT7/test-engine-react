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
      students: [
        { name: "Student1", id: 1, checked: false },
        { name: "Student2", id: 2, checked: false },
        { name: "Student3", id: 3, checked: false },
        { name: "Student4", id: 4, checked: false },
        { name: "Student5", id: 5, checked: false },
        { name: "Student6", id: 6, checked: false }
      ],
      selectedStudents: [],
      selectAll: false,
      searchName: '',
      showDropdownList: false
    }
  }

  selectAllStudents = () => {
    const students = this.state.students.map(s=> {
      s.checked = true
      return s
    })
    this.setState({students})
  }

  selectStudent = (e) => {
    const students = this.state.students.map(s => {
      if (s.id === +e.target.value) {
        s.checked = e.target.checked;
      }
      return s;
    })
    this.setState({students})
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

  showDropdown = () => {
    this.setState({showDropdownList: true})
  }

  closeDropdown = () => {
    this.setState({showDropdownList: false})
  }

  renderSelect = ({ input, label, meta, placeholder }) => {
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input {...input} placeholder={placeholder} onFocus={ this.showDropdown }  value={this.searchName} className="form-control"/>
      </div>
    );
  }

  renderStudentList = (search) => {
    return (
      <div className={`dropdown-menu ${this.state.showDropdownList ? 'show': ''}`}>
        <div className="items">
          {this.filteredStudents().map(s => (
            <div className="dropdown-item" key={s.id}>
              <input type="checkbox" value={s.id} onChange={this.selectStudent} checked={s.checked}/><span>{s.name}</span> 
            </div>
          ))}
        </div>
        <div className="dropdown-divider"></div>
        <div className="select-student-button mx-4">
          <button className="btn btn-primary" onClick={this.selectAllStudents} type="button">Select all</button>|
          <button className="btn btn-warning" type="button" onClick={this.closeDropdown}>close</button>
        </div>
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

  filteredStudents = () => {
    const searchName = new RegExp(this.state.searchName, 'i');
    return this.state.students.filter(s => searchName.test(s.name));
  }

  changeTitle = (e) => {
    this.setState({testTitle: e.target.value})
  }

  changeSearch = (e) => {
    this.setState({searchName: e.target.value})
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
                  <Field name="students[]" label="Select Students" component={this.renderSelect} placeholder="Search names" onChange={this.changeSearch}/>
                  {this.renderStudentList()}
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
