const getItemsFromStorage = () => {
  const item = localStorage.getItem("event-management");
  if (!item) return [];
  return JSON.parse(item);
};

export { getItemsFromStorage };
