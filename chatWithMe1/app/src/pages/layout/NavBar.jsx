import React, { useContext, useState } from 'react';
import SliderContext from '../../context/SliderContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {

    const {setSlider}=useContext(SliderContext)
    return (
        <>
            <div className='  h-20 flex items-center   fixed  top-0 left-0 w-full bg-slate-300'>
                <div className='ml-20'>
                <FontAwesomeIcon className='w-8 h-8' onClick={()=>{setSlider(true)}} icon={faBars} />

                </div>
                <div className='flex justify-center gap-x-4 text-3xl items-center'>
                   
                </div>
            </div>
        </>
    );
};

export default NavBar;