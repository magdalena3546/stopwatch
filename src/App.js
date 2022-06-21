import Container from './components/Container/Container';
import FormattedTime  from './components/Time/Time';
import Button from './components/Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = (e) => {
    e.preventDefault();
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  };
  const stop  = e => {
    e.preventDefault();
    clearInterval(timer);
  }

  const reset = e => {
    e.preventDefault();
    setTime(0);
  }

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);

  return ( 
  <Container >
    <FormattedTime  time={time} />
    <div>
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  </Container>
  );
};

export default App;