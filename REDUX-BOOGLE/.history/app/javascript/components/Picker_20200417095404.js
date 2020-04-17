import React from "react";
import PropTypes from "prop-types";

const Picker = (props) => {
  let input;
  const { onSubmit } = props;
  return (
    <span>
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
          placeholder="Guess the word"
          ref={(node) => {
            input = node;
          }}
        />
      </form>
    </span>
  );
};

Picker.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Picker;
