import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
  const { _onClick, width, height, padding, margin } = props;
  const styles = {
    onClick: _onClick,
    width: width,
    height: height,
    padding: padding,
    margin: margin,
  };
};

export default Container;
