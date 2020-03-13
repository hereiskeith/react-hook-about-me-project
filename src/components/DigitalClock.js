import React, {useState, useEffect, useContext} from 'react';
import {theme, ThemeContext} from "../theme-context";

const DigitalClock = props => {
  const [time, setTime] = useState(new Date());
  const theme = useContext(ThemeContext);
  useEffect(() => {
    let UpdateTimeEach1s = setInterval(() => {
      setTime(new Date())
    }, 1000);
    return () => {
      clearInterval(UpdateTimeEach1s)
    }
  }, [time]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center digital-clock-component col-md-3 mb-3">
      <h4>{time.toLocaleTimeString()}</h4>
      <div style={{width: 'fit-content'}}>
        {theme.quote}
      </div>
    </div>
  )
};

export default DigitalClock