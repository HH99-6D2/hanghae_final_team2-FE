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
  src: "https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=s200",
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
