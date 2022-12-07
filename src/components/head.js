import React from 'react';
import { TokenBanners } from './sub/token_banners';

export function Head() {
return (
<div className='container'>
<p className="bottom-space-md" />
	<div className='mobile-shrink'>
		<div className="title">
			<div className='cool-text'>DOGE-1</div>
		</div>
	</div>
	<div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
		<TokenBanners />
	</div>
</div>
);
}