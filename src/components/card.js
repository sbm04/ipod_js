import React from 'react';
import cardflow from './cardflow'

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
            console.log('in cart js',showCardflow,
            showGame,
            showMusic,
            showSetting)
         
        return (
            <div >
                
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
        )
    }
}
export default Card;