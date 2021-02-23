import { css } from "styled-components";

/** Css for Dropdown arrow depending on open/closed state */
const Arrow = css`
  &::before {
    width: 0;
    height: 0;
    position: absolute;
    left: -4rem;
    top: 1rem;
    transform: translateY(-50%);
    content: " ";
    ${(props) =>
      props.$open
        ? css`
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #000;
          `
        : css`
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid #000;
          `};
  }
`;

/** VerticalLine to show before parent list */
const VerticalLine = css`
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 1.5rem;
    bottom: 0;
    width: 1px;
    left: -0.25rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

/** HorizontalLine to show before each child in the list */
const HorizontalLine = css`
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 50%;
    left: -2.5rem;
    width: 1rem;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

/** Css for Image to be shown common for parent/child can be customised via props */
const Icon = css`
  position: relative;
  &::before {
    position: ${(props) => props.position || "absolute"};
    left: -4rem;
    width: 1rem;
    height: 1rem;
    content: url("profile.svg");
  }
`;

export { Arrow, VerticalLine, HorizontalLine, Icon };
