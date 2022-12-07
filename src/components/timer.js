import React, { useEffect, useState, useRef} from 'react';

export function Timer() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [timerMiliseconds, setTimerMiliseconds] = useState('0');
  
    let interval = useRef();
  
    const startTimer = () => {
      const countdownDate = new Date('March 1, 2023 03:00:00').getTime()
  
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);
        const miliseconds = Math.floor(distance % ((1000 * 60) / 1000)/10)
  
        if (distance < 0) {
          clearInterval(interval.current);
        }else{
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
          setTimerMiliseconds(miliseconds)
        }
  
      }, interval);
    }
  
    //compdidmount
    useEffect(() => {
      startTimer();
      return () => {
        clearInterval(interval.current);
      };
    })
  

    
    return (
        
        <div className='container'>
            <div className='counter-container'>
                <div className='count-timer' style={{color:'white'}}>
                  <div style={{width:'75px'}}>
                  <h2 style={{fontSize: '10px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
                  D
                  </h2>
                  <section>
                    <h1 className='thin-line'>{timerDays}</h1>
                  </section>
                  </div>
                  <span style={{color:'white'}}>:</span>
                  <div style={{width:'60px'}}>
                  <h2 style={{fontSize: '10px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
                  H
                  </h2>
                  <section>
                    <h1 className='thin-line'>{timerHours}</h1>
                  </section>
                  </div>
                  <span style={{color:'white'}}>:</span>
                  <div style={{width:'60px'}}>
                  <h2 style={{fontSize: '10px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
                  M
                  </h2>
                  <section>
                    <h1 className='thin-line'>{timerMinutes}</h1>
                  </section>
                  </div>
                  <span style={{color:'white'}}>:</span>
                  <div style={{width:'60px'}}>
                  <h2 style={{fontSize: '10px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
                  S
                  </h2>
                  <section>
                    <h1 className='thin-line'>{timerSeconds}</h1>
                  </section>
                  </div>
                  <span style={{color:'white'}}>.</span>
                  <div style={{width:'50px'}}>
                  <h2 style={{fontSize: '10px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
                  s
                  </h2>
                  <section>
                    <h1 className='thin-line'>{timerMiliseconds}</h1>
                  </section>
                </div>
              </div>
            </div>
            
        </div>
    );
}