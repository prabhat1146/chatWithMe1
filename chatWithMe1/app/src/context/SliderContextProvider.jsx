import React, { useState } from 'react';
import SliderContext from './SliderContext';

const SliderContextProvider = ({children}) => {
    const [slider,setSlider]=useState(false);
    return (
        <div>
             <SliderContext.Provider value={{slider,setSlider}}>
            {children}
             </SliderContext.Provider>
        </div>
    );
};

export default SliderContextProvider;