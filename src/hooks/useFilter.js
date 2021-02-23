import { useState, useEffect } from "react";

/**
 *
 * @param {Object} data - a Node's data { id, category, title }
 * @param {String} search - search query string
 */
export default function useFilter(data, search, filters) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (search === "" && filters.size === 0) {
      setShow(true);
      return;
    }
    const { category = "" } = data;
    const showParent =
      (category || "").toLowerCase().includes(search) &&
      (filters.size === 0 || filters.has(category));
    setShow(showParent);
  }, [data, search, filters]); //eslint-disable-line

  return show;
}
