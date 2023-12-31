import { LOCALSTORAGE_KEY } from "../constants";

const localStorageHooks = () => {
  const setLocalStorage = (key: string, value: any) => {
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    const encodeData = btoa(data);

    localStorage.setItem(key, encodeData);
  };

  const getLocalStorage = (key: string) => {
    const data =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;

    if (data) {
      const decodeData = atob(data);

      try {
        return JSON.parse(decodeData);
      } catch {
        return decodeData;
      }
    } else {
      return false;
    }
  };

  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const getUsername = () => {
    return getLocalStorage(LOCALSTORAGE_KEY.USERNAME);
  };

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    clearLocalStorage,
    getUsername,
  };
};

export default localStorageHooks;
