import React from 'react';
import Card from './components/card';
// import ZingTouch from 'zingtouch';
// import $ from 'jquery';
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
 render()
  {
    return (
      <div className="App">
      <h1>IPOD</h1>
        
          <Card/>
        
      </div>
    );
  }
}
export default App;
