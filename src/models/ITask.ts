export enum optionsPlans {
  IMPORTANT = 'Важное',
  HOME = 'Дом',
  WORK = 'Работа',
}

export interface ITask {
  id: string;
  task: string;
  result: boolean;
  date: string;
  plans: string;
}
