// Типизация роутов
export interface IRoutesUrl {
  readonly [name: string]: string;
}

// Типизация опций радио кнопок
export interface IOptions {
  label: string;
  value: string;
  icon?: string;
}
