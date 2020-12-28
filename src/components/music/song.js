

const Song =()=>
{
    return (
        <div style={{height:'207px',width:'300px'}}>
            <div className='song'>.
            <div className='song-img'>  </div>
                <div className='song-info'>
                    <h3 className='song-title'>Beliver</h3>
                    <p>Rock</p>
               
            </div>
            <div className="music-player-buttton-container">
        
                    <div className="music-player-button">
                         <span className='right'>0:00</span> 
                         <progress className='prog' value="50" max="100"> 32% </progress>
                         <span className='left'>5:0</span>
                    </div>
            </div>

            </div>
        </div>
        
    )
}

export default Song;