import React from 'react'
import WheelUi from '../../wheelUi.js';

const Game =(props)=>
{
  const{ handleMenuClick1}=props;
  // function to handle menu click 
  const handleClick=()=>
  {
      handleMenuClick1();
  }
    return (<div className='card2'>
        {/* rendering games div  */}
        <div className='settings-div'>
             <span className='title-center'>Artist</span>
            <div className='game'>
           
            </div>

        </div>
           
        <WheelUi
          handleZesture={props.handleZesture}
          handleMenuClick={props.handleMenuClick1}
          handleClick={props.handleClick}
        />
        
      </div>
    )
}

export default Game;