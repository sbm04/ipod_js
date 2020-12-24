import React from 'react';
const WheelUi =(props)=>{
    return(
        <div className="wheel_container">
              <div  className="wheel_button">
                 <div className="enter-div">
                     <div className="menu_button" onClick={props.menuButtonClicked}>
                         <span>
                             MENU
                         </span>
                     </div>
                     <div className="next_prev_button"  >
                         <div className="backward" onClick={props.leftButtonClicked}>
                          <i class="fa fa-fast-backward" aria-hidden="true"></i>
                         </div>
                        <div className="small_circle">

                        </div>
                        <div className="forward" onClick={props.rightButtonClicked}>
                         <i class="fa fa-fast-forward" aria-hidden="true"></i>
                        </div>
                        
                     </div>
                     <div className="play_pause_button" onClick={props.playPauseButtonClicked}>
                       <i class="fa fa-play" aria-hidden="true"></i>
                       <i class="fa fa-pause" aria-hidden="true"></i>
        
                     </div>
                     
                 </div>
              </div> 
        </div>
    )
}

export default WheelUi;