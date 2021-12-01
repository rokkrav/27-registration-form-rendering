import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !isValidFirstName})
  }

  renderFirstNameInputField = () => {
    const {firstName, showFirstNameError} = this.state
    const firstNameClassName = showFirstNameError
      ? 'input-field error-field'
      : 'input-field'
    return (
      <div className="input-container">
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          className={firstNameClassName}
          value={firstName}
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstName}
        />
      </div>
    )
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError: !isValidLastName})
  }

  renderLastNameInputField = () => {
    const {lastName, showLastNameError} = this.state
    const lastNameClassName = showLastNameError
      ? 'input-field error-field'
      : 'input-field'
    return (
      <div className="input-container">
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="Last name"
          id="lastName"
          className={lastNameClassName}
          value={lastName}
          onBlur={this.onBlurLastName}
          onChange={this.onChangeLastName}
        />
      </div>
    )
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form className="registration-form" onSubmit={this.submitForm}>
        {this.renderFirstNameInputField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameInputField()}
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isSubmitted: !prevState.isSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="main-heading">Registration</h1>
        <div className="view-container">
          {isSubmitted
            ? this.renderSubmissionView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
