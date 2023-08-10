/* eslint-disable indent */

import { ActionsTypeEnum } from '@/enums/todo.enum';

import { AnyAction } from 'redux';
import { GlobalStateType } from 'src/@types/todo.type';

const initialState: GlobalStateType = {
  selectedTodo: null,
  todos: [],
  isFetching: false,
};

export const todoReducer = (state = initialState, _action: AnyAction) => {
  switch (_action.type) {
    case ActionsTypeEnum.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, _action.payload],
      };

    case ActionsTypeEnum.GET_TODOS:
      return {
        ...state,
        todos: _action.payload,
      };

    case ActionsTypeEnum.UPDATE_TODO:
      return {
        ...state,
        todos: _action.payload,
      };

    case ActionsTypeEnum.DELETE_TODO:
      return {
        ...state,
        todos: _action.payload,
      };

    default:
      return state;
  }
};
