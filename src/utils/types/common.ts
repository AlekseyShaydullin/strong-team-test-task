/**
 * Типизация роутов
 */
export interface IRoutesUrl {
  readonly [name: string]: string;
}

export interface IAddTaskAction {
  todo: string;
  date: string;
}
