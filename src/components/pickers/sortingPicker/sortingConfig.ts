import {
  optionsIconSorting,
  optionsLabelSorting,
  optionsValueSorting,
} from '../../../utils/constants';

export const options = [
  {
    label: optionsLabelSorting.DEFAULT,
    value: optionsValueSorting.DEFAULT,
    icon: optionsIconSorting.DEFAULT,
  },
  {
    label: optionsLabelSorting.DATEUP,
    value: optionsValueSorting.DATEUP,
    icon: optionsIconSorting.DATEUP,
  },
  {
    label: optionsLabelSorting.DATEDOWN,
    value: optionsValueSorting.DATEDOWN,
    icon: optionsIconSorting.DATEDOWN,
  },
  {
    label: optionsLabelSorting.NAMEUP,
    value: optionsValueSorting.NAMEUP,
    icon: optionsIconSorting.NAMEUP,
  },
  {
    label: optionsLabelSorting.NAMEDOWN,
    value: optionsValueSorting.NAMEDOWN,
    icon: optionsIconSorting.NAMEDOWN,
  },
];
