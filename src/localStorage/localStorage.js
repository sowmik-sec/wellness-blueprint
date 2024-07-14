const getItemsFromStorage = () => {
  const item = localStorage.getItem("event-management");
  if (!item) return [];
  return JSON.parse(item);
};

const storeToLocalStorage = (event) => {
  const prevItems = getItemsFromStorage();
  const newList = [...prevItems, event];
  localStorage.setItem("event-management", JSON.stringify(newList));
};

export { getItemsFromStorage, storeToLocalStorage };
