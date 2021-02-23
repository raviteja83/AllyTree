import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Arrow, Icon, VerticalLine } from "./common";
import NodeItem from "./NodeItem";
import useFilter from "../hooks/useFilter";

const Container = styled.div`
  padding-left: 1.5rem;
  padding-bottom: 1rem;
  ${VerticalLine};
`;

const Content = styled.ul`
  padding-left: 1rem;
  list-style: lower-alpha;
  margin: 0;
  position: relative;
`;

const TitleWrapper = styled.div`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  ${Arrow};
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Title = styled.li`
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  ${Icon};
`;

function Node({ data, search, filters }) {
  const [open, setOpen] = useState(true); //to toggle open/close state of parent
  const show = useFilter(data, search, filters); // to show only if it matches search
  return show ? (
    <Container>
      <TitleWrapper $open={open} onClick={() => setOpen((val) => !val)}>
        <Title>{data.title || "N.A."}</Title>
      </TitleWrapper>
      {open && (
        <Content>
          {data.children.map((value) => {
            return <NodeItem key={value.id}>{value.title}</NodeItem>;
          })}
        </Content>
      )}
    </Container>
  ) : null;
}

Node.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    children: PropTypes.array.isRequired
  }).isRequired,
  search: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired
};

export default Node;
