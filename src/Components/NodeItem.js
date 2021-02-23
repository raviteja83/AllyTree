import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HorizontalLine, Icon } from "./common";

const Item = styled.li``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  ${HorizontalLine};

  &:hover {
    background-color: #f2f2f2;
  }
`;

const Image = styled.span`
  ${Icon};
  align-self: flex-start;
  margin-right: 2.5rem;
  height: 1.25rem;
`;

function NodeItem({ children }) {
  return (
    <Wrapper>
      <Image position="static" />
      <Item>{children}</Item>
    </Wrapper>
  );
}

NodeItem.propTypes = {
  children: PropTypes.string.isRequired
};

export default React.memo(NodeItem);
