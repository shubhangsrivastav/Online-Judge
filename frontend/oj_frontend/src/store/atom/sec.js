import {atom} from "recoil"
export const secState = atom({
    key: 'secState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });
  