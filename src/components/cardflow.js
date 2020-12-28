import React from 'react'
import WheelUi from '../wheelUi'

const CardFlow =(props)=>
{
    const{ handleMenuClick}=props;

    // function to handle menu click 
    const handleClick=()=>
    {
        handleMenuClick();
    }
    return (
        <div>
        <div className='screen-coverflow'>

           
           <span className='cardflow-title'>CardFlow </span>
            <div>
               
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

export default CardFlow;