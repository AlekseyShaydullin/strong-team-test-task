// Типизация Action - addTask
export interface IAddTaskAction {
  todo: string;
  date: string;
  plans: string;
  counterPosition: number;
}

// Типизация Action - changeTask
export interface IChangeTaskAction
  extends Omit<IAddTaskAction, 'counterPosition'> {
  id: string;
}

// Типизация Action - getDnDTask
export interface IGetDnDTask {
  itemSourceIndex: number;
  itemDestinationIndex: number | undefined;
}
