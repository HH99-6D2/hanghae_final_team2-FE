import React from 'react';
import styled from 'styled-components';
import { Grid, Image } from '.';
import Search from '../assets/Search.svg';

const Input = (props) => {
  const {
    placeholder,
    _onChange,
    _onClick,
    value,
    type,
    multiLine,
    width,
    defaultValue,
    border,
    edit,
    create,
    search,
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
  } else if (edit) {
    return (
      <React.Fragment>
        <EditInput
          {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          defaultValue={defaultValue}
        />
      </React.Fragment>
    );
  } else if (create) {
    return (
      <React.Fragment>
        <CreateInput
          {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          defaultValue={defaultValue}
        />
      </React.Fragment>
    );
  } else if (search) {
    return (
      <React.Fragment>
        <Grid SearchFlex padding='0 7px' border='1px solid #B9B9B9'>
          <SearchInput
            {...styles}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            defaultValue={defaultValue}
          />
          <Image size='30' src={Search} _onClick={_onClick} />
        </Grid>
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
  placeholder: '',
  // type: 'text',
  _onChange: () => {},
  _onClick: () => {},
  width: '',
  margin: 'auto',
  outline: 'none',
  defaultValue: '',
};

const ElTextarea = styled.textarea`
  border: ${(props) => props.border};
  border-radius: 15px;
  padding: 11px 4px;
  box-sizing: border-box;
  width: 80%;
  text-align: center;
  margin: auto;
  outline: none;
`;

const ElInput = styled.input`
  border: ${(props) => props.border};
  border-radius: 15px;
  padding: 11px 4px;
  box-sizing: border-box;
  ${(props) => (props.width ? `width:${props.width}` : '')};
  text-align: center;
  margin: auto;
  outline: none;
  ${(props) =>
    props.defaultValue ? `defaultValue:${props.defaultValue}` : ''};
`;

const EditInput = styled.input`
  border: none;
  padding: 17px 4px;
  box-sizing: border-box;
  ${(props) => (props.width ? `width:${props.width}` : '')};
  color: #767676;
  outline: none;
  width: 90%;
  border-bottom: 1px solid #767676;
  ${(props) =>
    props.defaultValue ? `defaultValue:${props.defaultValue}` : ''};
`;

const CreateInput = styled.input`
  border: none;
  padding: 12px 4px;
  box-sizing: border-box;
  width: 320px;
  color: #767676;
  outline: none;
  border-radius: 15px;
  ${(props) =>
    props.defaultValue ? `defaultValue:${props.defaultValue}` : ''};
  border: 1px solid #b9b9b9;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 12px 4px;
  box-sizing: border-box;
  width: 270px;
  outline: none;
  text-align: start;
  border: 0px;
`;
export default Input;
