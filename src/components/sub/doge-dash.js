import React from 'react';

export function DogeDash() {
  return (
      <div className='container'>
        <div className='bottom-space-sm' />
        <div className='row' style={{flexFlow:'column'}}>
          <div className='col'>
            <img src="images/web/doge_spin.gif" width="45px" alt="" style={{margin:'-15px'}} />
          </div>
        </div>
            <div className='row' style={{flexFlow:'column'}}>
            <h2 style={{fontSize: '20px', fontWeight: '500', textAlign: 'center'}}>
            👾
            <br />
             <i>MUCH </i><b> FUN</b>
              </h2>
            </div>
          <div className='bottom-space-sm' />

          <div className='row'>
            <div className='mobile-shrink-2'>
            <iframe src="https://i.simmer.io/@757372one/doge-1"  title='doge-dash'
            style={{"width":"960px", "height":"600px", "border":"0"}}></iframe>
          </div>
          </div>
      </div>
  );
}