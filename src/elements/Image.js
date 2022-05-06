import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size } = props;
  const styles = {
    src: src,
    size: size,
  };
  return (
    <>
      <ImageCircle {...styles}></ImageCircle>
    </>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "",
  size: 130,
};

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  border: 1px solid green;

  background-image: url("${(props) => props.src}");
  background-size: cover;
`;
export default Image;
