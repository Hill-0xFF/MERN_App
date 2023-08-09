export type UpdateTodoType = {
  id: number;
  title: string;
  description: string;
  status: 'done' | 'pending';
  date: string;
};

export type NovaTodoType = Omit<UpdateTodoType, 'id'>;

export type TodoType = UpdateTodoType;
