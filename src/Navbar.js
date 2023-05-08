import React from 'react'
// import {Link} from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//        <ul>
//         <Link to='/'> <li> Home </li> </Link>
//         <Link to='/dashboard' > <li> Dashboard </li> </Link>
//         <Link to='/about' > <li> About </li> </Link>
//         </ul>   
//     </div>
//   )
// }
// export default Navbar

import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link> </li>
          <li><Link to="/About">About</Link> </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};
export default Navbar;