import { useState, useEffect } from 'react';

const Seconds = () => {
  const [ seconds, setSeconds ] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          setSeconds(seconds => seconds + 1);
      }, 1000);

      return () => { 
        clearInterval(intervalId);
      }
  }, [seconds]);

  return seconds;
}

export default Seconds;