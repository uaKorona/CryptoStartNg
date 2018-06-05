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
  firstInputErrorTable: { [key: string]: string };
  secondInputErrorTable: { [key: string]: string };

  constructor(data = {}) {
    Object.assign(this, data);
  }

  private getErrorMessage(inputErrorTable: { [key: string]: string }, errors) {
    const errorArray = Object
      .keys(errors)
      .map(errorKey => inputErrorTable[errorKey]);

    return errorArray[0] || '';
  }

  firstInputErrors = (errors) => {
    return this.getErrorMessage(this.firstInputErrorTable, errors);
  }

  secondInputErrors = (errors) => {
    return this.getErrorMessage(this.secondInputErrorTable, errors);
  }

}
