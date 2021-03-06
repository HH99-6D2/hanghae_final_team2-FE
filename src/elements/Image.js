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
		setting,
		margin,
		CateBtn,
		background,
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
		setting: setting,
		margin: margin,
		CateBtn: CateBtn,
		background: background,
	};

	if (CateBtn) {
		return (
			<>
				<CateBtnImage {...styles} onClick={_onClick}>
					{children}
				</CateBtnImage>
			</>
		);
	}

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
	} else if (setting) {
		return (
			<>
				<Setting {...styles} onClick={_onClick}>
					{children}
				</Setting>
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
	margin: ${(props) => props.margin};

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
	background-position: center;
	position: relative;
	${(props) => (props.border ? `border:${props.border}` : 'none')};
`;
const Setting = styled.div`
	width: 80px;
	height: 80px;
	margin: 14px 2px 10px 31px;
	border-radius: 15px;
	background-image: url('${(props) => props.src}');
	background-size: cover;
	${(props) => (props.border ? `border:${props.border}` : 'none')};
`;

const MainImage = styled.div`
	width: 320px;
	height: 380px;
	margin: 18px auto;
	border-radius: 10px;
	border: none;
	background-size: cover;
	${(props) => (props.position ? `position:${props.position}` : '')};
	background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 58.46%),
		url('${(props) => props.src}');
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

const CateBtnImage = styled.div`
	width: 174px;
	height: 154px;
	border-radius: 8px;
	background-image: url('${(props) => props.src}');
	background-size: cover;
`;

export default Image;
