import { optionsLabel, optionsValue } from '../../utils/constants';

export interface IOptionsRadioButtons {
  label: optionsLabel;
  value: optionsValue;
}

export const optionsRadioButtons: Array<IOptionsRadioButtons> = [
  { label: optionsLabel.IMPORTANT, value: optionsValue.IMPORTANT },
  { label: optionsLabel.HOME, value: optionsValue.HOME },
  { label: optionsLabel.WORK, value: optionsValue.WORK },
];
