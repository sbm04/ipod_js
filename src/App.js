import React from 'react';
import Card from './components/card';
import CardFlow from './components/cardflow';
import Game from './components/game/games';
import Settings from './components/setting/setting';
import ZingTouch from 'zingtouch';
import Music from './components/music/music';
import Wheelui from './wheelUi';
import $ from 'jquery';
//import { render } from '@testing-library/react';

class App extends React.Component 
{ 
      constructor()
      {
        super();
        this.state={
          showCardflow:false,
          showMusic:false,
          showSetting:false,
          showComponent:false,
          showMusicComponent:false
        }
      }
      // function to handle mouse rotate
      handleZesture=(e)=>
    {
        console.log('state',this.state);

        const context=this;
        var distance=0;
        var region=new ZingTouch.Region(e.target)
            region.bind(e.target,'rotate',function(e)
            {

                console.log('last distancce details',e.detail.distanceFromLast);
                console.log('rorate details',e.detail.distanceFromOrigin);
                distance=e.detail.distanceFromOrigin;


                // making diffrent component active based on wheel distance 

                // initilly cardflow state is true
                if(distance>0 && distance<85) 
                {
                    context.setState({
                        showCardflow:true,
                        showMusic:false,
                        showSetting:false
                       
                    })
                }

                // maiking cardflow state false and music state true
                else if(distance>85 && distance<177 )
                {
                    context.setState({
                        showMusic:true,
                        showCardflow:false,
                        showGame:false,
                
                    })
                }

                // ,aking game state true and music false
                else if (distance>177 && distance<264 )
                {
                     context.setState({
                         showMusic:false,
                         showGame:true,
                         showSetting:false,
                       
                        })
                }

                //setting active as settings 
                else if(distance>244 && distance < 340)
                {
                    context.setState({
                        showGame:false,
                        showSetting:true,
                       
                    })
                }


                // repeating same for anticlock rotation
                if(distance>-90 && distance<0)
                {
                    context.setState({
                        showCardflow:false,
                        showSetting:true,
                        showGame:false,
                       
                    });
                }
                else if(distance>-168 && distance<-90)
                {
                    context.setState({
                        showGame:true,
                        showSetting:false,
                        showMusic:false,
                        showCardflow:false
                       
                    });
                }
                else if (distance>-271 && distance<-168)
                {
                    context.setState({showGame:false,showCardflow:false,showMusic:true});
                }
                else if (distance>-340 && distance<-271)
                {
                    context.setState({showSetting:false,showCardflow:true,showMusic:false});
                }
            })  
    }
       
    // function to handle enter click 
    handleClick=()=>
    {
       
        this.setState({showCoponent:true})
    }

    // function to handle menu click
    handleMenuClick=()=>
    {
        this.setState({showCoponent:false})
    }
 render()
  {
    const {showCardflow,
      showGame,
      showMusic,
      showCoponent,
      showSetting,

      }=this.state;
    return (
      <div className="App">
         <div className='screen1'>
            <div className='screen'>
            {
                    // rendering diffrent component based on conditions
                     showCoponent?showCardflow?<CardFlow handleMenuClick={this.handleMenuClick}/> 
                    
                    :showGame? <Game handleZesture={this.handleZesture}
                    handleMenuClick={this.handleMenuClick}
                    handleClick={this.handleClick} handleMenuClick={this.handleMenuClick}/> 
                    :<Settings  handleMenuClick={this.handleMenuClick}/> 
                     :
                     <div>
                     <Card 
                     showCardflow={showCardflow} 
                     showGame={showGame}
                     showMusic={showMusic} 
                     showSetting={showSetting}
                     handleZesture={this.handleZesture}
                     handleMenuClick={this.handleMenuClick}
                     handleClick={this.handleClick}
                     />
                     <Wheelui
                        handleZesture={this.handleZesture}
                        handleMenuClick={this.handleMenuClick}
                        handleClick={this.handleClick}
                     />
                     </div>
                }
            </div>

         </div>
        
       
        
      </div>
    );
  }
}
export default App;
