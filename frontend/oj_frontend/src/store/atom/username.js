import {atom} from "recoil"
export const userNameState = atom({
    key: 'userNameState', // unique ID (with respect to other atoms/selectors)
    default: undefined, // default value (aka initial value)
  });
  