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
  icon?: string;
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

/** Опции лэйблов для фильтра */
export enum optionsValueFilter {
  DEFAULT = 'Отфильтровать',
  IMPORTANT = 'Важное',
  HOME = 'Дом',
  WORK = 'Работа',
  DONE = 'Выполнено',
  NOTDONE = 'Невыполнено',
}

/** Опции значений для для фильтра */
export enum optionsLabelFilter {
  DEFAULT = 'DEFAULT',
  IMPORTANT = 'IMPORTANT',
  HOME = 'HOME',
  WORK = 'WORK',
  DONE = 'DONE',
  NOTDONE = 'NOTDONE',
}

/** Опции иконок для фильтра */
export enum optionsIconFilter {
  DEFAULT = 'default',
  IMPORTANT = 'important',
  HOME = 'home',
  WORK = 'work',
  DONE = 'done',
  NOTDONE = 'notdone',
}

/** Опции лэйблов для сортировки */
export enum optionsValueSorting {
  DEFAULT = 'Отсортировать',
  NAMEUP = 'Название по возрастанию',
  NAMEDOWN = 'Названию по убыванию',
  DATEUP = 'Дата по возрастанию',
  DATEDOWN = 'Дата по убыванию',
}

/** Опции значений для сортировки */
export enum optionsLabelSorting {
  DEFAULT = 'DEFAULT',
  NAMEUP = 'NAMEUP',
  NAMEDOWN = 'NAMEDOWN',
  DATEUP = 'DATEUP',
  DATEDOWN = 'DATEDOWN',
}

/** Опции иконок для сортировки */
export enum optionsIconSorting {
  DEFAULT = 'default',
  NAMEUP = 'name-up',
  NAMEDOWN = 'name-down',
  DATEUP = 'date-up',
  DATEDOWN = 'date-down',
}
