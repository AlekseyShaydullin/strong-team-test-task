import {
  optionsIconFilter,
  optionsLabelFilter,
  optionsValueFilter,
} from '../../utils/types/common';

export const options = [
  {
    label: optionsLabelFilter.DEFAULT,
    value: optionsValueFilter.DEFAULT,
    icon: optionsIconFilter.DEFAULT,
  },
  {
    label: optionsLabelFilter.IMPORTANT,
    value: optionsValueFilter.IMPORTANT,
    icon: optionsIconFilter.IMPORTANT,
  },
  {
    label: optionsLabelFilter.DONE,
    value: optionsValueFilter.DONE,
    icon: optionsIconFilter.DONE,
  },
  {
    label: optionsLabelFilter.NOTDONE,
    value: optionsValueFilter.NOTDONE,
    icon: optionsIconFilter.NOTDONE,
  },
  {
    label: optionsLabelFilter.WORK,
    value: optionsValueFilter.WORK,
    icon: optionsIconFilter.WORK,
  },
  {
    label: optionsLabelFilter.HOME,
    value: optionsValueFilter.HOME,
    icon: optionsIconFilter.HOME,
  },
];
