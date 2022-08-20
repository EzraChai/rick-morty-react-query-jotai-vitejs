import { atom } from "jotai";

const getNightModeValueFromLocalStorage = () => {
  const item = localStorage.getItem("nightMode");
  if (item !== null) {
    return item === "true" ? true : false;
  }
  return false;
};

const nightModeAtom = atom(getNightModeValueFromLocalStorage());

export const nightModeToggleAtom = atom(
  (get) => get(nightModeAtom),
  (get, set, _args) => {
    const nightMode = !get(nightModeAtom);
    set(nightModeAtom, nightMode);
    localStorage.setItem("nightMode", nightMode ? "true" : "false");
  }
);
