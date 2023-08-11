import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import Header from '@/components/Header';

import { Dispatch } from './@types/dispatch.type';
import { ReducerType } from './@types/todo.type';
import { addNewTodo, getTodos } from './redux/actions/todo.actions';
import { createNewTodo } from './requests';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const dispatch: Dispatch = useDispatch();
  const {
    todoReducer: { isFetching },
  } = useSelector((state: ReducerType) => state);

  useEffect(() => {
    dispatch(
      addNewTodo({
        title: 'useEffect Todo',
        description: 'During initialization, useEffect sends an initial data.',
        status: 'pending',
        date: new Date().toISOString(),
      })
    );
  }, []);

  const handleButtonSend = async () => {
    const resp = await createNewTodo({
      title: 'A New Way',
      description: 'A new way to change your hair',
      status: 'pending',
      date: new Date().toISOString(),
    });

    dispatch(getTodos());
    console.log(resp);
  };

  return (
    <>
      <div>
        <>{isFetching}</>
        <Header />
      </div>
      <div className="card">
        <Button
          variant="contained"
          color="warning"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Button
          onClick={handleButtonSend}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
      <DatePicker label="Select an appropriate date" />
    </>
  );
}

export default App;
