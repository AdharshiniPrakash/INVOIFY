import React from 'react';
import logo from '../assets/invoify.svg';


function NavBar() {
  return (
    <>
        <header className="bg-white shadow p-4 mb-6">
            <nav>
                <img src={logo} alt="Invoify Logo" className="h-16 w-42"/>
            </nav>
        </header>
    </>
  )
}

export default NavBar