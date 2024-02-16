import React from 'react'
import { Link } from 'react-router-dom'

const ContactList = () => {
  return (
    <>
      <div className="container mt-2">
        <span className='heading'>Contact Manager</span>
        <Link to={'/contacts/add'} className='btn btn-primary ms-3'><i class="fa-solid fa-user-plus"></i> Add</Link>
        <div className='mt-2'>
          <i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi quod sint delectus, eius illo fugiat. Saepe reiciendis a voluptas, officia cumque alias repudiandae suscipit at, quisquam ut totam facilis.
          </i>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <input type="text" className='form-control shadow-none mt-3' placeholder='Search here...' />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card">
             <div className='d-flex justify-content-between p-3'>
              <img style={{height:"80px"}} src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg" alt="Profile_Img" />
              <ul className='list-unstyled'>
                <li>Name : <strong>Jhone Doe</strong></li>
                <li>Mobile : <strong>1252458255</strong></li>
                <li>Email : <strong>jhonedoe@gmail.com</strong></li>
              </ul>
             </div>
             <div className='d-flex justify-content-end gap-3 pe-3 pb-3'>
                <button className='btn btn-info '>Edit</button>
                <button className='btn btn-warning'>View</button>
                <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactList