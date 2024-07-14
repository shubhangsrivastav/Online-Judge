import {atom} from "recoil"
export const secState = atom({
    key: 'secState', // unique ID (with respect to other atoms/selectors)
    default: 5, // default value (aka initial value)
  });
  