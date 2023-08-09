import { useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import Header from '@/components/Header';

import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          variant="contained"
          color="warning"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <DatePicker label="Select an appropriate date" />
    </>
  );
}

export default App;
