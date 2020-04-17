import React from "react";
import PropTypes from "prop-types";

const Picker = (props) => {
  let input;
  const { onSubmit } = props;
  return (
    <span>
      <h1>Guess the word</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.value !== "") {
            onSubmit(input.value);
          }
        }}
      >
        <input
          type="text"
          ref={(node) => {
            input = node;
          }}
        />
        <input type="submit" value="Search" />
      </form>
    </span>
  );
};

Picker.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Picker;
