import React from 'react'

import WheelUi from '../../wheelUi.js';

const Game =(props)=>
{
    

    
    return (<div className='card2'>
        {/* rendering games div  */}
        <div className='settings-div'>
             <span className='title-center'>Game</span>
            <div className='game'>
           
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

export default Game;