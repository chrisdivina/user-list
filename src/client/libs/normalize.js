const normalize = items => {
  const normalizedItems = {};
  items.forEach(item => {
    normalizedItems[item.id] = item;
  });
  return normalizedItems;
};

export default normalize;
