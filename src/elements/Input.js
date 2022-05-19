import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const {
    placeholder,
    _onChange,
    type,
    multiLine,
    width,
    defaultValue,
    border,
  } = props;
  const styles = {
    width,
    border,
  };
  if (multiLine) {
    return (
      <React.Fragment>
        <ElTextarea
          {...styles}
          rows={10}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElInput
        {...styles}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        defaultValue={defaultValue}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  placeholder: "",
  // type: 'text',
  _onChange: () => {},
  width: "",
  margin: "auto",
  outline: "none",
  defaultValue: "",
};

const ElTextarea = styled.textarea`
  border: ${(props) => props.border};
  border-radius: 15px;
  padding: 12px 4px;
  box-sizing: border-box;
  width: 80%;
  text-align: center;
  margin: auto;
  outline: none;
`;

const ElInput = styled.input`
  border: ${(props) => props.border};
  border-radius: 15px;
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => (props.width ? `width:${props.width}` : "")};
  text-align: center;
  margin: auto;
  outline: none;
  ${(props) =>
    props.defaultValue ? `defaultValue:${props.defaultValue}` : ""};
`;

export default Input;
