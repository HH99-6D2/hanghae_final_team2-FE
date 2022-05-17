import React from 'react';
import { BsExclamationSquareFill } from 'react-icons/bs';
import styled from 'styled-components';

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
    Profile,
    position,
  } = props;
  const styles = {
    src: src,
    size: size,
    inlineStyles: inlineStyles,
    CateChat: CateChat,
    circle: circle,
    mainchat: mainchat,
    border: border,
    Profile: Profile,
    position: position,
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
  } else if (Profile) {
    return (
      <>
        <ProfileImage {...styles} onClick={_onClick}>
          {children}
        </ProfileImage>
      </>
    );
  }

  return (
    <>
      <ImageCircle {...styles} onClick={_onClick}>
        {children}
      </ImageCircle>
    </>
  );
};
Image.defaultProps = {
  // shape: "circle",
  src: '',
  size: '',
  position: '',
  _onClick: () => {},
};

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

const CateImage = styled.div`
  width: 317px;
  height: 215px;
  margin: 7px auto;
  border-radius: 15px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  ${(props) => (props.border ? `border:${props.border}` : 'none')};
`;

const MainImage = styled.div`
  width: 320px;
  height: 380px;
  margin: 18px auto;
  border-radius: 15px;
  border: none;
  background-image: url('${(props) => props.src}');
  background-size: contain;
`;

const ProfileImage = styled.div`
  position: absolute;
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  margin: 0px 3px;
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

export default Image;
