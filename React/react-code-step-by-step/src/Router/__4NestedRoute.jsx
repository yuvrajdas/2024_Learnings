import React from 'react'
import { NavLink, k, Outlet} from 'react-router-dom'

const __4NestedRoute = () => {
  return (
    <>
        <h1>Nested Routing</h1>
        <ul>
            <li><NavLink to={'company-location'}>Company Location</NavLink></li>
            <li><NavLink to={'comapny-details'}>Company Details</NavLink></li>
            <li><NavLink to={'company-size'}>Company size</NavLink></li>
            <Outlet />
        </ul>
    </>
  )
}

export default __4NestedRoute