import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import styled from "styled-components";

const Image = (props) => {
  const {
    circle,
    src,
    size,
    inlineStyles,
    children,
    _onClick,
    CateChat,
    mainchat,
    border,
  } = props;
  const styles = {
    src: src,
    size: size,
    inlineStyles: inlineStyles,
    CateChat: CateChat,
    circle: circle,
    mainchat: mainchat,
    border: border,
  };

  if (CateChat) {
    return (
      <>
        <CateImage {...styles} onClick={_onClick}>
          {children}
        </CateImage>
      </>
    );
  } else if (mainchat) {
    return (
      <>
        <MainImage {...styles} onClick={_onClick}>
          {children}
        </MainImage>
      </>
    );
  } else {
    return (
      <>
        <ImageCircle {...styles} onClick={_onClick}>
          {children}
        </ImageCircle>
      </>
    );
  }
};
Image.defaultProps = {
  // shape: "circle",
  src: "",
  size: "",
  _onClick: () => {},
};

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const CateImage = styled.div`
  width: 317px;
  height: 215px;
  margin: 7px auto;
  border-radius: 15px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  ${(props) => (props.border ? `border:${props.border}` : "none")};
`;

const MainImage = styled.div`
  width: 320px;
  height: 380px;
  margin: 18px auto;
  border-radius: 15px;
  border: none;
  background-image: url("${(props) => props.src}");
  background-size: contain;
`;

export default Image;
