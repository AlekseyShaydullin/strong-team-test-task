/**
 * Типизация роутов
 */
export interface IRoutesUrl {
  readonly [name: string]: string;
}

export interface IAddTaskAction {
  todo: string;
  date: string;
  plans: string;
}

export interface IOptions {
  label: string;
  value: string;
}

/** Опции лэйблов для радио кнопок */
export enum optionsValue {
  IMPORTANT = 'Важное',
  HOME = 'Дом',
  WORK = 'Работа',
}

/** Опции значений для для радио кнопок */
export enum optionsLabel {
  IMPORTANT = 'IMPORTANT',
  HOME = 'HOME',
  WORK = 'WORK',
}
