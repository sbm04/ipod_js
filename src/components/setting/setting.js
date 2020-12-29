import React from 'react'
import WheelUi from '../../wheelUi.js';

const Setting =(props)=>
{
    const{ handleMenuClick}=props;
    // function to handle menu click 
    const handleClick=()=>
    {
        handleMenuClick();
    }
    return (
       
        <div className='card2'>
             {/* rendering seetings  div  */}
            <div className='settings-div'>
                <span className='title-center'><i class="fa fa-cogs" aria-hidden="true"> Setting</i></span>
                <div className='settings'>
                
                </div>
            </div>
            <WheelUi

                handleZesture={props.handleZesture}
                handleMenuClick={props.handleMenuClick}
                handleClick={props.handleClick}
            />
         </div>
    )
}

export default Setting