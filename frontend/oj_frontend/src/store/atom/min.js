import {atom} from "recoil"
export const minState = atom({
    key: 'minState', // unique ID (with respect to other atoms/selectors)
    default: 30, // default value (aka initial value)
  });
  