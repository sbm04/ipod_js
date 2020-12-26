import React from 'react'


const Game =(props)=>
{
    const{ handleMenuClick}=props;
    // function to handle menu click 
    const handleClick=()=>
    {
        handleMenuClick();
    }
    return (<div className='card2'>
        {/* rendering games div  */}
        <div className='settings-div'>
             <span className='title-center'>Game</span>
            <div className='game'>
           
            </div>

        </div>

        
      </div>
    )
}

export default Game;