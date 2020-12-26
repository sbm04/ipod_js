import React from 'react'


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
             <span className='title-center'>Settings </span>
            <div className='settings'>
               
            </div>

        </div>
         {/* wheel div  */}
         <div className="wheel_container">
                  <div  className="wheel_button" onClick={this.handleWheelClick}>
                   <div className="enter-div">
                     <div className="menu_button" onClick={this.handlemenuClick} >
                         <span>
                             MENU
                         </span>
                     </div>
                     <div className="next_prev_button"  >
                         <div className="backward" >
                          <i class="fa fa-fast-backward" aria-hidden="true"></i>
                         </div>
                        <div className="small_circle" onClick={this. handleEnterclick}>

                        </div>
                        <div className="forward">
                         <i class="fa fa-fast-forward" aria-hidden="true"></i>
                        </div>
                        
                     </div>
                     <div className="play_pause_button">
                       <i class="fa fa-play" aria-hidden="true"></i>
                       <i class="fa fa-pause" aria-hidden="true"></i>
        
                     </div>
                     
                 </div>
              </div> 
        </div>
        
      </div>
    )
}

export default Setting