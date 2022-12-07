import React from 'react';
import { TokenBanners } from './token_banners';

export function Token() {
return (
<div className='container'>
<p className="bottom-space-md" />
	<div className='token__section'>
   		<div className='token__wrapper'>
      		<div className="token__container-card">
			  <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
					<div className='img-zoom'>
						<a href={'https://twitter.com/elonmusk/status/1391523807148527620'}>
							<img src='./cybertruck_logo_flash.gif'  width="350px" alt=''  />
						</a>
					</div>
				</div>
				<div className="row mobile-shrink" style={{flexFlow: 'row', alignItems:'center'}}>
      				<h2 style={{display: 'flex',fontSize: '25px', fontWeight: '400', textAlign: 'center'}}>
      					COMMUNITY&emsp;
      				</h2>
      				<hr width="3" size="50"/>
      				<h2 style={{display: 'flex',fontSize: '35px', fontWeight: '800', textAlign: 'center'}}>
						&emsp;GIVEAWAY
					</h2>
				</div>
				<div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
					<TokenBanners />
				</div>
			</div>
		</div>
	</div>
</div>
);
}