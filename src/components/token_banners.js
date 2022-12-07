import React from 'react';

export function TokenBanners() {
  return (
      <div className='container'>
          <div className='row'>
            <a href='https://pancakeswap.finance/swap?outputCurrency=0xfA83De3ee9b354f8b7659AB72F642a345982113a'  className="btn effect04">
              <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          BUY
              </h2>
              </a>
              <a href='https://doge-1.org'  className="btn effect04">
                <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          HOME
                </h2>
                </a>
                <a href='https://www.dextools.io/app/en/bnb/pair-explorer/0x62f16e2556ba09f192c4fad2a89d96f0f0d802f5'  className="btn effect04">
                <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                  CHART
                </h2>
              </a>
            </div>
          </div>
  );
}