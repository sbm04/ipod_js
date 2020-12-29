import React from 'react';
import WheelUi from '../../wheelUi.js';

const Song =(props)=>
{   
    const{ handleMenuClick1}=props;
    // function to handle menu click 
    const handleClick=()=>
    {
        handleMenuClick1();
    }
    function playmusic(){
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }
    function pausemusic(){
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.pause()
    }
    
    return (
        <div className='card2'>
        <div className='music-player-container'>
            
            
                <div className='song-info'>
                    <h4 className='song-title'>Sunn le zara </h4>
                    <p>Pal </p>
                </div>
               
                <div className='play-pause-player-button'>
                    <audio className="audio-element">
                    <source src="https://pwdown.com/11735/Sunn%20Le%20Zara%20-%201921%20-%20320Kbps.mp3"></source>
                    </audio>
                        
                        <button className='button_icon' onClick={playmusic}>
                        <i class="fa fa-play" aria-hidden="true"></i>
                        </button>
                        <button className='button_icon' onClick={pausemusic}>
                         <i class="fa fa-pause" aria-hidden="true"></i>
                        </button>
              </div>
                
            <div className='music-player-buttton-container'>
        
                    <div className="music-player-button">
                         <span className='right'>0:00</span> 
                         <progress className='prog' value="50" max="100"> 32% </progress>
                         <span className='left'>5:00</span>
                    </div>
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

export default Song;