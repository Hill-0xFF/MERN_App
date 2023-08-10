import { ActionsTypeEnum } from '@/enums/todo.enum';

import { Dispatch } from 'src/@types/dispatch.type';
import { NovaTodoType, TodoType, UpdateTodoType } from 'src/@types/todo.type';

import {
  createNewTodo,
  deleteTodo,
  readNewTodo,
  updateTodo,
} from '../../requests';

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

const updateTodoItem = (todo: UpdateTodoType[]) => {
  return {
    type: ActionsTypeEnum.UPDATE_TODO,
    payload: todo,
  };
};

const deleteTodoItem = (todo: UpdateTodoType[]) => {
  return {
    type: ActionsTypeEnum.DELETE_TODO,
    payload: todo,
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

export const updateTodos = (todo: UpdateTodoType) => {
  return async (dispatch: Dispatch) => {
    const resp = await updateTodo(todo);
    dispatch(updateTodoItem(resp));
  };
};

export const delTodo = (todo: TodoType) => {
  return async (dispatch: Dispatch) => {
    const resp = await deleteTodo(todo.id);
    dispatch(deleteTodoItem(resp));
  };
};
