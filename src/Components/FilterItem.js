import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  margin: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  ${(props) =>
    props.$selected &&
    css`
      color: green;
      background-color: rgba(0, 255, 0, 0.3);
    `};
  @media screen and (max-width: 768px) {
    padding: 0.25rem;
  }
`;

function FilterItem({ onClick, children, selected }) {
  return (
    <Container $selected={selected} onClick={() => onClick(children)}>
      {children}
    </Container>
  );
}

FilterItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};

export default React.memo(FilterItem);
