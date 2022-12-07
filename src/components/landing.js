import React from 'react';
export function Landing() {
return (
  <div className="container">
    <div className='row' style={{flexFlow:'column'}}>
      <div className='row' >
			<div className='col'>
				<a href='https://t.me/official_doge1'>
					<img src='images/web/telegram_icon.png' width='30px' alt='telegram-profile' />
				</a>
			</div>
			<div className='col'>
				<a href='https://twitter.com/Official_DOGE1'>
					<img src='images/web/twitter_icon.png' width='30px' alt='twitter-profile' />
				</a>
			</div>
			
		</div>
      <h2 style={{fontSize: '18px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em', lineHeight:'25px'}}>
        HOLD <i><b> $DOGE-1</b></i> <br /> EARN <i> $DOGECOIN</i>
      </h2>
      
      <div className='flip'>
        <img src="images/web/doge_dance.gif" width="50px" alt="" style={{marginTop:'-5px'}} />
      </div>
    </div>
    <div className='row' style={{flexFlow:'column'}}>
      <p>︾</p>
    </div>
    <div className='row' style={{flexFlow:'column'}}>
      <p className="bottom-space" style={{marginBottom:'550px'}} />
      <div className='float-div2'>
        <img src="images/web/doge1.gif" width="200px" alt="" style={{marginTop:'-5px'}} />
      </div>
    </div>
</div>
);
}