import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mobile: '',
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

  const formValidatorHandler = (field)=>{
    setTouchedFields({
      ...touchedFields,
      [field]:true
    })
  }
  
  const setErrorMessage = (field)=>{
    if(field === 'fname'){
      if(formData.fname === ''){
        return 'First name is required.'
      }
      if(formData.fname.length<2){
        return 'First name must contain at least 2 characters.'
      }
      if(!formData.fname.match(/^[A-Za-z'-]{2,}$/)){                              
        return `Please enter a valid first name containing letters only.`
      }
    }

    if(field === 'lname'){
      if(formData.lname === ''){
        return 'Lirst name is required.'
      }
      if(formData.fname.length<2){
        return 'Last name must contain at least 2 characters.'
      }
      if(!formData.fname.match(/^[A-Za-z'-]{2,}$/)){
        return `Please enter a valid Lirst name containing letters only.`
      }
    }

    if(field === 'mobile'){
      if(formData.mobile === ''){
        return 'Mobile number is required.'
      }
      if(formData.fname.length<10){
        return 'Mobile number must be 10 digits'
      }
      pa
      if(!formData.mobile.match(/^\d{10}$/)){
        return `Mobile number cannot contain alphabetic characters or special characters.`
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
                onBlur={() => formValidatorHandler('fname')}
                className="form-control shadow-none"
              />
              <div className="text-danger ms-2">
                {touchedFields.fname ? setErrorMessage('fname'):''}
              </div>
            </div>
            <div className="col-md-5 mb-3">
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleInputs}
                onInput={() => formValidatorHandler('lname')}
                className="form-control shadow-none"
              />
              <div className="text-danger ms-2">
                {touchedFields.lname ? setErrorMessage('lname'):''}
              </div>
            </div>
            <div className="col-md-5 mb-3">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputs}
                onInput={() => formValidatorHandler('email')}
                className="form-control shadow-none"
              />
              <div className="text-danger ms-2">
                {touchedFields.email ? setErrorMessage('email'):''}
              </div>
            </div>
            <div className="col-md-5 mb-3">
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputs}
                onInput={() => formValidatorHandler('mobile')}
                className="form-control shadow-none"
              />
              <div className="text-danger ms-2">
                {touchedFields.mobile ? setErrorMessage('mobile'):''}
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
