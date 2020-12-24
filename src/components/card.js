import React from 'react';

class Card extends React.Component
{

    // function to handle wheel rotation
    handleWheelClick=(e)=>
    {
        const {handleZesture}=this.props;
        handleZesture(e);
    }

    // function to handle menu click 
    handlemenuClick=()=>
    {
        const {handleMenuClick}=this.props;
        handleMenuClick();
    }

    // function to hanlde enter click 
    handleEnterclick=()=>
    {
        const{handleClick}=this.props;
        handleClick();
    }
    render()
    {
        const {showCardflow,
            showGame,
            showMusic,
            showSetting,

            }=this.props;
         
        return (
            <div >
                <div className="screen-container">
                {/* card div  */}
               <div className='card'>
                    <p className='title'>Ipod.js</p>
                    <div className={`card-list ${showCardflow ?'active':''}`} >
                        cardflow
                    </div>
                    <div className={`card-list ${showMusic ?'active':''}`}>
                        Music
                    </div>
                    <div className={`card-list ${showGame ?'active':''}`}>
                        Game
                    </div>
                    <div className={`card-list ${showSetting ?'active':''}`}>
                        Settings
                    </div>
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
}
export default Card;