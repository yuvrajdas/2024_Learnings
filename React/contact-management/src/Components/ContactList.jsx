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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum fuga quia. Nisi cum non praesentium, quibusdam harum cupiditate soluta ab recusandae repellat repudiandae debitis, delectus ducimus adipisci consequuntur obcaecati.
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum fuga quia. Nisi cum non praesentium, quibusdam harum cupiditate soluta ab recusandae repellat repudiandae debitis, delectus ducimus adipisci consequuntur obcaecati.
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum fuga quia. Nisi cum non praesentium, quibusdam harum cupiditate soluta ab recusandae repellat repudiandae debitis, delectus ducimus adipisci consequuntur obcaecati.
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum fuga quia. Nisi cum non praesentium, quibusdam harum cupiditate soluta ab recusandae repellat repudiandae debitis, delectus ducimus adipisci consequuntur obcaecati.
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactList