function getInitialState(value) {
  return {
    ...value,
    children: []
  };
}

/**
 * @param {Array} data
 * Convert array to an object with parent as key
 * Add children with parent key to children array inside parent
 */
function formatData(data) {
  const filters = new Set();
  const transformedData = data.reduce((result, value) => {
    const parentId = value.parent_objective_id;
    const isParent = parentId === "";
    if (value.category) {
      filters.add(value.category);
    }
    if (isParent) {
      result[value.id] = getInitialState(value);
    } else {
      const parent = result[parentId];
      if (!parent) {
        result[parentId] = getInitialState({
          id: parentId
        });
      }
      result[parentId].children.push(value);
    }
    return result;
  }, {});
  return {
    result: transformedData,
    filters: Array.from(filters)
  };
}

/**
 * Load data from the url
 */
function getData() {
  return fetch("https://okrcentral.github.io/sample-okrs/db.json")
    .then((response) => response.json())
    .then(({ data = [] }) => formatData(data))
    .catch(console.error);
}

export { getData };
