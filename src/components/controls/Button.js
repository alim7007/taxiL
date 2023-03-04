import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--outline-dark"];
const SIZES = ["btn--medium", "btn--large"];

function Button(props) {
  const {
    children,
    type,
    onClick,
    buttonStyle,
    heroBtns,
    buttonSize,
    cardBtn,
    href,
  } = props;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a
      href={href}
      className={`btn ${heroBtns} ${cardBtn} ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </a>
  );
}

export default Button;
