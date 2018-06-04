type errorFn = () => string;

export class TabOption {
  name = 'customTab';
  firstInputName = 'firstInput';
  firstInputPlaceholder = 'Enter something';
  secondInputName = 'secondInput';
  secondInputPlaceholder = 'Enter something 2';
  firstInputValidators: any[] | null = null;
  secondInputValidators: any[] | null = null;
  submitButtonName = 'submitButtonName';
  submitButtonStyle = '';
  getErrorMessage: {[key: string]: errorFn};

  constructor (data = {}) {
    Object.assign(this, data);
  }
}
