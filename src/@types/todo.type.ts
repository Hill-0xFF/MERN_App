export type UpdateTodoType = {
  id: number;
  title: string;
  description: string;
  status: 'done' | 'pending';
  date: string;
};

export type NovaTodoType = Omit<UpdateTodoType, 'id'>;

export type TodoType = {
  id: number;
  title: string;
  description: string;
  status: 'done' | 'pending';
  date: string;
};

// For reducer's initial state
export type GlobalStateType = {
  selectedTodo: TodoType | null;
  todos: TodoType[];
  isFetching: boolean;
};

export type ReducerType = {
  todoReducer: GlobalStateType;
};
