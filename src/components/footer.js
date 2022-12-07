
import { TokenBanners } from './sub/token_banners';
export function Footer() {

  return (
<div className='footer'>
    <p className='bottom-space-md' />
    <TokenBanners />
    <p className='bottom-space-sm' />
    <div className='row' style={{flexFlow:'column'}}>
        <div className='col'>
        <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'center'}}> © WWW.ƉOGE-1.ORG
             TOKEN -  All Rights Reserved.</h2>
        </div>
        <div className='col'>
            <h2 style={{display: 'flex',fontSize: '13px', textAlign: 'center'}}>hello@doge-1.org</h2>
        </div>
        <p className='bottom-space-md' />
    </div>
    
  </div>
  );
}