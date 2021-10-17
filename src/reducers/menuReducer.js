import { types } from '../types/types';

export const menuInitialState = {
  status: false,
};

export const menuReducer = (state, action) => {
  switch (action.type) {
    case types.setMenuStatus:
      return {
        ...state,
        status: !state.status,
      };

    default:
      return state;
  }
};
