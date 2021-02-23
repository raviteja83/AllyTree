import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import Tree from "./Components/Tree";
import { getData } from "./Utils";
import FilterItem from "./Components/FilterItem";

const Container = styled.div`
  height: 100%;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Input = styled.input`
  padding: 0 1rem;
  height: 2.25rem;
  flex-shrink: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 15rem;
  display: block;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.5);
  &:focus {
    outline: 0;
    border-color: rgba(0, 0, 0, 0.7);
  }
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: #f00;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0.5rem;
  max-width: 50%;
  @media screen and (max-width: 768px) {
    max-width: unset;
  }
`;

export default function App() {
  const [nodes, setNodes] = useState({});
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(new Set());
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const inputRef = useRef(null);

  const handleChange = debounce(() => {
    if (!inputRef.current) {
      return;
    }
    setSearch(inputRef.current.value);
  }, 300);

  useEffect(() => {
    getData()
      .then(({ result, filters }) => {
        setNodes(result);
        setFilters(filters);
      })
      .catch((err) => setError(err));
  }, []);

  const applyFilters = useCallback(
    (item) => {
      const currentSelection = new Set(selectedFilters);
      if (currentSelection.has(item)) {
        currentSelection.delete(item);
      } else {
        currentSelection.add(item);
      }
      setSelectedFilters(currentSelection);
    },
    [selectedFilters]
  );

  return (
    <Container>
      {!error && (
        <Input
          ref={inputRef}
          placeholder="Search by Category"
          onChange={handleChange}
        />
      )}
      <FilterContainer>
        {Array.from(filters).map((filter) => (
          <FilterItem
            key={filter}
            onClick={applyFilters}
            selected={selectedFilters.has(filter)}
          >
            {filter}
          </FilterItem>
        ))}
      </FilterContainer>
      {error ? (
        <Error>An error occured while fetching data</Error>
      ) : (
        <Tree nodes={nodes} search={search} filters={selectedFilters} />
      )}
    </Container>
  );
}
