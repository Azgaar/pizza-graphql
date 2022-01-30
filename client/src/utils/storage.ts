export const getStored = (key: string) => {
  const stored = localStorage.getItem(key);
  if (stored) {
    return JSON.parse(stored);
  }
  return null;
};

export const makeStore = (key: string) => (value: any) => {
  if (value === null) {
    localStorage.removeItem(key);
    return;
  }

  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }

  localStorage.setItem(key, value);
};
