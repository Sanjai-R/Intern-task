import { ActionType } from "./actionType";

export const addproducts = (data) => {
   return { type: ActionType.add,payload: data.item}
}
export const removeproducts = (data) => {
  return { type: ActionType.remove, payload: data.item };
};
