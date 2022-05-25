export const priorityParser = (priority) => {
  switch (priority) {
    case 1:
      return 'Low';
    case 2:
      return 'Medium';
    case 3:
      return 'High';

    default:
      break;
  }
};

export const stateParser = (state) => {
  switch (state) {
    case 1:
      return 'New';
    case 2:
      return 'In Process';
    case 3:
      return 'Finished';

    default:
      break;
  }
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
