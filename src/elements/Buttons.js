import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { fontSize } from '@mui/system';
import Grid from './Grid';
import Image from './Image';

const Buttons = (props) => {
  const {
    margin,
    text,
    children,
    large,
    medium,
    small,
    _onClick,
    key,
    value,
    active,
    Sidebar,
    Category,
  } = props;

  const styles = {
    margin,
    text,
    children,
    large,
    medium,
    small,
    _onClick,
    key,
    value,
    active,
  };

  if (Sidebar) {
    return (
      <React.Fragment>
        <Grid profileFlex>
          <Image Profile src={props.src} size='30' onClick={_onClick}></Image>
          <SidebarButton {...styles} onClick={_onClick}>
            {text ? text : children}
          </SidebarButton>
        </Grid>
      </React.Fragment>
    );
  }

  if (Category) {
    return (
      <React.Fragment>
        <Grid profileFlex>
          <Image Profile src={props.src} size='28' onClick={_onClick}></Image>
          <CategoryButton {...styles} onClick={_onClick}>
            {text ? text : children}
          </CategoryButton>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Buttons.defaultProps = {
  margin: '',
  text: '',
  children: null,
  _onClick: () => {},
  large: '',
  medium: '',
  small: '',
  key: '',
  value: '',
  active: '',
};

const ElButton = styled(Button)({
  margin: 'auto',
  color: '#4D12FF',
  width: '314px',
  height: '45px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#4D12FF',
  borderColor: '#acacac',
  boxSizing: 'border-box',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#fff',
    backgroundColor: '#333333',
    borderColor: '#333333',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#333333',
    borderColor: '#333333',
    color: '#fff',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const SidebarButton = styled(Button)({
  color: '#333333',
  width: '310px',
  height: '52px',
  borderBottom: '1px solid #EAEAEA',
});

const CategoryButton = styled(Button)({
  margin: '5px 4px',
  color: '#121212',
  width: '93px',
  height: '38px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 600,
  padding: '0',
  border: '1px solid #ffffff',
  borderRadius: '19px',
  lineHeight: 1.5,
  backgroundColor: '#ffffff',
  borderColor: '#acacac',
  boxSizing: 'border-box',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#5D5FEF',
    borderColor: '#5D5FEF',
    boxShadow: 'none',
    color: '#ffffff',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#4D12FF',
    borderColor: '#4D12FF',
    color: '#ffffff',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#4D12FF',
    borderColor: '#4D12FF',
    color: '#ffffff',
  },
});

export default Buttons;
