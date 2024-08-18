import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   

    <nav className="flex text-lg md:text-2xl justify-center">
                    <div className="flex items-center space-x-1">
                        <Link
                        to="/"
                        className="py-4 px-5 text-black-500 font-semibold hover:text-green-500 font-semibold "
                        >
                            Home
                        </Link>
                        <Link
                        to="/addnotes"
                        className="py-4 px-5 text-black-500 font-semibold hover:text-green-500 font-semibold "
                        >
                            Add Notes
                        </Link>
                        <Link
                        to="/logout"
                        className="py-4 px-5 text-black-500 font-semibold hover:text-green-500 font-semibold "
                        >
                           Logout
                        </Link>
                        
                        
                       
                    </div>
            </nav>
  )
}

export default Navbar
