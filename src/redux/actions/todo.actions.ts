import { ActionsTypeEnum } from '@/enums/todo.enum';

import { Dispatch } from 'src/@types/dispatch.type';
import { NovaTodoType, TodoType } from 'src/@types/todo.type';

import { createNewTodo, readNewTodo } from '../../requests';

// action type definition
export const test = {
  type: 'TEST',
  payload: {},
};

// action creators definition
const addTodo = (todo: NovaTodoType) => {
  return {
    type: ActionsTypeEnum.ADD_TODO,
    payload: todo,
  };
};

const getAllTodos = (todos: TodoType[]) => {
  return {
    type: ActionsTypeEnum.GET_TODOS,
    payload: todos,
  };
};

// Redux Thunk
// function that returns another function
export const addNewTodo = (todo: NovaTodoType) => {
  return async (dispatch: Dispatch) => {
    // dispatch an action
    const resp = await createNewTodo(todo);
    dispatch(addTodo(resp));
  };
};

export const getTodos = () => {
  return async (dispatch: Dispatch) => {
    const resp = await readNewTodo();
    dispatch(getAllTodos(resp));
  };
};
