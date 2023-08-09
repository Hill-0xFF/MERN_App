export type UpdateTodoType = {
  id: number;
  title: string;
  description: string;
  status: boolean;
  date: string;
};

export type NovaTodoType = Omit<UpdateTodoType, 'id'>;
