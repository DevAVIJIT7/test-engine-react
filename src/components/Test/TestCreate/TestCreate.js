import React from 'react';
import { connect } from 'react-redux';
import Header from '../../Header/Header';
import './TestCreate.css';

class TestCreate extends React.Component {
  render() {
    return (
      <div>
        <Header /> 
        <div className="test-create-box shadow row">
        <div className="col-lg-7">
          <form>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationServer01">Title</label>
                  <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationServer02">Start Date</label>
                  <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationServerUsername">End Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    </div>
                    <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required />
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-8 mb-3">
                  <label for="validationServer03">Description</label>
                  <input type="text" class="form-control is-invalid" id="validationServer03" required />
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationServer04">Students</label>
                  <select class="custom-select is-invalid" id="validationServer04" required>
                    <option selected disabled value="">Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 mb-3">
                  <label for="validationServer03">Question</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationServer04">Option 1</label>
                  <select class="custom-select is-invalid" id="validationServer04" required>
                    <option selected disabled value="">Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationServer04">Option 2</label>
                  <select class="custom-select is-invalid" id="validationServer04" required>
                    <option selected disabled value="">Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationServer04">Option 3</label>
                  <select class="custom-select is-invalid" id="validationServer04" required>
                    <option selected disabled value="">Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationServer04">Option 4</label>
                  <select class="custom-select is-invalid" id="validationServer04" required>
                    <option selected disabled value="">Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
          </div>
          <div className="col-lg-1 vertical-line"></div>
          <div className="col-lg-4">
            My Test
          </div>
        </div>     
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.auth.token, user: state.auth.user, tests: state.test.tests  }
}

export default connect(mapStateToProps, {})(TestCreate);
