import { NovaTodoType, UpdateTodoType } from 'src/@types/todo.type';

const getTodosFromLocalStorage = () => {
  const allTodos = localStorage.getItem('todos');
  return allTodos ? JSON.parse(allTodos) : [];
};

export const createNewTodo = (todo: NovaTodoType) => {
  console.log(todo);
};

export const readNewTodo = () => {
  getTodosFromLocalStorage();
};

export const updateTodo = (todo: UpdateTodoType) => {
  console.log(todo);
};

export const deleteTodo = (id: number) => {
  console.log(id);
};
