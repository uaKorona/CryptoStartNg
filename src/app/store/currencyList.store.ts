import Currency from '../models/Currency';

export interface State {
  list: Currency[];
}

export const initialState: State = {
  list: []
};
