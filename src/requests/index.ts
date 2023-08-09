import { TodoEnums } from '@/enums/todo.enum';

import { NovaTodoType, TodoType, UpdateTodoType } from 'src/@types/todo.type';

const getTodosFromLocalStorage = (): TodoType[] => {
  // const allTodos = localStorage.getItem('todos');
  // return allTodos ? JSON.parse(allTodos) : [];
  // const allTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  // this line uses the Nullable implementation
  return JSON.parse(localStorage.getItem('todos') ?? '[]');
};

const saveTodosToLocalStorage = (todo: NovaTodoType): UpdateTodoType => {
  const todos = getTodosFromLocalStorage();
  const newTodoId = todos.length ? todos[todos.length - 1]?.id + 1 : 1;
  const newTodo = { ...todo, id: newTodoId };
  // todos.push(newTodo);
  const updatedTodos = [...todos, newTodo];
  localStorage.setItem(TodoEnums.LOCALSTORAGEKEY, JSON.stringify(updatedTodos));
  return newTodo;
};

export const createNewTodo = async (
  todo: NovaTodoType
): Promise<UpdateTodoType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedTodo = saveTodosToLocalStorage(todo);
      resolve(updatedTodo);
    }, TodoEnums.TIMEOUT);
  });
};

export const readNewTodo = async (): Promise<TodoType[]> => {
  return new Promise((resolve) => {
    const todos = getTodosFromLocalStorage();
    setTimeout(() => {
      resolve(todos);
    }, TodoEnums.TIMEOUT);
  });
};

export const updateTodo = async (
  todo: UpdateTodoType
): Promise<UpdateTodoType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = getTodosFromLocalStorage();
      const updated = todos.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return todo;
        }
        return todoItem;
      });
      localStorage.setItem(TodoEnums.LOCALSTORAGEKEY, JSON.stringify(updated));
      resolve(updated);
    }, TodoEnums.TIMEOUT);
  });
};

export const deleteTodo = async (id: number): Promise<UpdateTodoType[]> => {
  return new Promise((resolve) => {
    const todos = getTodosFromLocalStorage();
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(TodoEnums.LOCALSTORAGEKEY, JSON.stringify(newTodos));
    resolve(newTodos);
  });
};
