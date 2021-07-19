import { ActionType } from "../actions/actionType";
export const reducer = (state=[], action) =>{
  switch (action.type) {
    case ActionType.add:
      return { ...action.payload, quantity: (action.payload.quantity += 1) };
    case ActionType.remove:
      return { ...action.payload, quantity: (action.payload.quantity -= 1) };
    default:
      return state;
  }
}
