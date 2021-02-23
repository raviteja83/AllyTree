import React from "react";
import styled from "styled-components";
import Node from "./Node";

const Container = styled.div`
  flex-grow: 1;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;

const Content = styled.ol`
  margin: 0 auto;
  max-width: 768px;
`;

function Tree({ nodes, search, filters }) {
  return (
    <Container>
      <Content>
        {Object.keys(nodes).map((key) => {
          const data = nodes[key];
          return (
            <Node key={key} data={data} search={search} filters={filters} />
          );
        })}
      </Content>
    </Container>
  );
}

export default Tree;
