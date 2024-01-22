import { optionsLabelModal, optionsValue } from '../../../utils/constants';

export interface IOptionsRadioButtonsModal {
  label: optionsLabelModal;
  value: optionsValue;
}

export const optionsRadioButtonsModal: Array<IOptionsRadioButtonsModal> = [
  { label: optionsLabelModal.IMPORTANT, value: optionsValue.IMPORTANT },
  { label: optionsLabelModal.HOME, value: optionsValue.HOME },
  { label: optionsLabelModal.WORK, value: optionsValue.WORK },
];
