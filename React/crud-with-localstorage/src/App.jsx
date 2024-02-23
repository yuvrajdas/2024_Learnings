import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mobile: 0,
    email: '',
  });

  const [touchedFields, setTouchedFields] = useState({});

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formValidatorHandler = (field) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true
    })
  }

  const setErrorMessage = (field) => {
    if (field === 'fname') {
      if (formData.fname === '') {
        return 'First name is required.'
      }
      if (formData.fname.length < 2 && isNaN(formData.fname)) {
        return 'First name must contain at least 2 characters.'
      }
      if (!formData.fname.match(/^[A-Za-z'-]{2,}$/)) {
        return `Please enter a valid first name containing letters only.`
      }
    }

    if (field === 'lname') {
      if (formData.lname === '') {
        return 'Lirst name is required.'
      }
      if (formData.fname.length < 2) {
        return 'Last name must contain at least 2 characters.'
      }
      if (!formData.fname.match(/^[A-Za-z'-]{2,}$/)) {
        return `Please enter a valid Lirst name containing letters only.`
      }
    }

    if (field === 'mobile') {
      if (formData.mobile.toString().length === 0) {
        return 'Mobile number is required.';
      }
      if (isNaN(formData.mobile)) {
        return 'Mobile number must be a number.';
      }
      if (formData.mobile.toString().length !== 10) {
        return 'Mobile number must be a 10-digit number.';
      }
    }

    if (field === 'email') {
      if (formData.email === '') {
        return 'Email is required.'
      }

      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
        return 'Invalid email format.';
      }
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleFormSubmit}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 mb-3 ">
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleInputs}
                onKeyUp={() => formValidatorHandler('fname')}
                className="form-control shadow-none"
              />
              <div className="text-danger ms-2">
                {touchedFields.fname ? setErrorMessage('fname') : ''}
              </div>
            </div>
            <div className="col-md-5 mb-3">
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleInputs}
                onKeyUp={() => formValidatorHandler('lname')}
                className="form-control shadow-none"
              />
              <div className="text-danger ms-2">
                {touchedFields.lname ? setErrorMessage('lname') : ''}
              </div>
            </div>
            <div className="col-md-5 mb-3">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputs}
                onKeyUp={() => formValidatorHandler('email')}
                className="form-control shadow-none"
              />
              <div className="text-danger ms-2">
                {touchedFields.email ? setErrorMessage('email') : ''}
              </div>
            </div>
            <div className="col-md-5 mb-3">
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                value={formData.mobile !== 0 ? formData.mobile : ''}
                onChange={handleInputs}
                onKeyUp={() => formValidatorHandler('mobile')}
                className="form-control shadow-none"
              />
              <div className="text-danger ms-2">
                {touchedFields.mobile ? setErrorMessage('mobile') : ''}
              </div>
            </div>
            <div className='col-md-10 mb-3'>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
