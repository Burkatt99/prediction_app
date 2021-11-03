import { ADD_ITEM_INFORM } from "../constatns/todo_type";
const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_INFORM:
      return [...state, action.payload];
    default:
      return state;
  }
};
