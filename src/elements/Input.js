import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Grid from "./Grid";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine } = props;

  if (multiLine) {
    return (
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElTextarea
          rows={10}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <Text margin="10px">{label}</Text>
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: "텍스트",
  placeholder: "",
  type: "text",
  _onChange: () => {},
  width: "80%",
  margin: "auto",
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  border-radius: 15px;
  padding: 12px 4px;
  box-sizing: border-box;
  width: 80%;
  text-align: center;
  margin: auto;
`;

const ElInput = styled.input`
  border: 1px solid #212121;
  border-radius: 15px;
  padding: 12px 4px;
  box-sizing: border-box;
  width: 80%;
  text-align: center;
  margin: auto;
`;

export default Input;
