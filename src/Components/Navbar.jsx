import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center text-2xl text-bold flex gap-4'>
           <Link to={'/'}><h2 className='btn'>Coffees</h2></Link> 
           <Link to={'/addcoffee'}><h2 className='btn'>Add Coffee</h2></Link> 
          
           <Link to={'signin'}><h2 className='btn'>Sign In</h2></Link> 
        </div>
    );
};

export default Navbar;