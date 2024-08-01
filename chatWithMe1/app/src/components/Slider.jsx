import React, { useContext } from 'react';
import SliderContext from '../context/SliderContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareXmark } from '@fortawesome/free-solid-svg-icons'


const Slider = () => {
    const { slider, setSlider } = useContext(SliderContext);

    return (
        <>
            <div className={`transform transition-transform duration-500 ease-in-out
                ${slider ? 'translate-x-0' : '-translate-x-full'}
                h-screen 
                max-h-screen 
                overflow-y-scroll 
                bg-slate-700 
                w-3/4 lg:w-1/4 
                fixed
                left-0
                top-0
                z-50
            `}>
                <div className='flex flex-row justify-between mx-10'>
                    <div className=' my-4 w-20 h-20 rounded-full bg-white flex items-center'>
                        <h1 className=''>Profile pic</h1>
                    </div>
                    <div>
                    <FontAwesomeIcon className=' cursor-pointer w-10 h-10 text-white' onClick={()=>{setSlider(false)}} icon={faSquareXmark} />
                    </div>
                </div>
                <div className='text-2xl flex flex-col'>
                    <button className='text-white border border-spacing-1 border-slate-600 w-full'>Gemini</button>
                    <button className='text-white border border-spacing-1 border-slate-600 w-full'>ChatGPT 3.5</button>
                    <button className='text-white border border-spacing-1 border-slate-600 w-full'>ChatGPT 3.5 & Gemini</button>
                    {/* Repeat menu items as needed */}
                </div>
            </div>
        </>
    );
};

export default Slider;
