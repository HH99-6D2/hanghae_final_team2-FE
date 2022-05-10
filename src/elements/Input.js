import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { placeholder, _onChange, type, multiLine } = props;

  if (multiLine) {
    return (
      <React.Fragment>
        <ElTextarea
          rows={10}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  placeholder: '',
  type: 'text',
  _onChange: () => {},
  width: '80%',
  margin: 'auto',
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
