import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { io } from 'socket.io-client';
import axios from 'axios';
import Profile from '../components/common/Profile';
import OtherMessage from '../components/chat/OtherMessage';
import ChatInfo from '../components/chat/ChatInfo';

let socket;

const Chat = () => {
	const navigate = useNavigate();
	const { chatid } = useParams();
	const [inputData, setInputData] = useState('');
	const [chatList, setChatList] = useState([]);
	const [roomData, setRoomData] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [userList, setUserList] = useState([]);
	const [toastMessage, setToastMessage] = useState();
	const userId = sessionStorage.getItem('id');
	const socketInitiate = async () => {
		await axios({
			method: 'get',
			url: `https://yogoloper.shop/api/rooms/join/${chatid}`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('token')}`,
			},
		}).catch(() => {
			navigate('/');
		});
		const res = await axios({
			method: 'get',
			url: `https://yogoloper.shop/api/rooms/${chatid}`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('token')}`,
			},
		});
		setRoomData(res.data);
		socket = io('https://test.junehan-test.shop', {
			auth: {
				token: sessionStorage.getItem('token'),
				nickname: sessionStorage.getItem('nick'),
				cType: sessionStorage.getItem('cType'),
			},
		});
		socket.on('history', (data) => {
			setChatList(JSON.parse(data));
		});
		socket.emit('joinRoom', { room: chatid }, (data) => {
			console.log(data);
		});
		socket.on('roomUsers', ({ room, users }) => {
			setUserList(users);
		});
		socket.on('timeout', (left) => {
			console.log('left', left);
		});
		socket.on('message', (message) => {
			if (message.type === 'system') {
				setToastMessage(message.text);
				setTimeout(() => {
					setToastMessage(null);
				}, 2000);
			} else {
				setChatList((prev) => [...prev, message]);
			}
		});
		socket.on('chat_error', (err) => {
			console.log(err.type); // E05 ~ E08
			console.log(err.text); // Room invalid || Chat type Error
		});
	};

	useEffect(async () => {
		socketInitiate();
	}, []);

	const onChange = ({ target: { value } }) => {
		setInputData(value);
	};

	const sendChat = () => {
		socket.emit(
			'chatMessage',
			JSON.stringify({
				type: 'text',
				text: inputData,
			})
		);
		setInputData('');
	};

	const checkEnter = (e) => {
		if (e.key === 'Enter') {
			sendChat();
		}
	};

	const chatEndRef = useRef(null);

	const scrollToBottom = () => {
		chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		console.log(chatEndRef.current);
		scrollToBottom();
	}, [chatList]);

	const fileInput = useRef(null);

	const Loadfile = (Blob) => {
		const formDatas = new FormData();
		formDatas.append('image', Blob);
		const reader = new FileReader();
		reader.readAsDataURL(Blob);
		return new Promise((resolve) => {
			reader.onload = () => {
				resolve();
			};
		});
	};

	const sendImage = (e) => {
		Loadfile(e.target.files[0]);
		console.log(e.target.files[0]);

		const formData = new FormData();
		formData.append('file', e.target.files[0]);

		axios({
			method: 'POST',
			url: 'https://junehan-test.shop/api/user/upload',
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('token')}`,
				'Content-Type': `multipart/form-data`,
			},
			data: formData,
		})
			.then((res) => {
				socket.emit(
					'chatMessage',
					JSON.stringify({
						type: 'image',
						text: '',
						imageUrl: res.data.url,
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	if (!isOpen) {
		return (
			<>
				<Header>
					<BackButton
						onClick={() => {
							socket.emit('leaveRoom');
							navigate(-1);
						}}
					/>
					<ChatTitle>{roomData?.title}</ChatTitle>
					<MenuButton
						onClick={() => {
							setIsOpen(true);
						}}
					/>
				</Header>
				{toastMessage && <Toast>{toastMessage}</Toast>}
				<ChatList>
					{chatList.map((chat, index) => {
						if (chat.id === parseInt(userId)) {
							if (chat.type === 'text') {
								return <MyMessage key={index}>{chat.text}</MyMessage>;
							}
							return <MyImage src={chat.imageUrl} alt='이미지' key={index} />;
						}
						return <OtherMessage chat={chat} key={index} />;
					})}
					<div ref={chatEndRef} />
				</ChatList>
				<InputBox>
					<label>
						<input
							type='file'
							name='file'
							accept='image/png,image/gif'
							onChange={sendImage}
							style={{ display: 'none' }}
							ref={fileInput}
						/>
						<AddFile />
					</label>
					<Input
						type='text'
						placeholder='start chat'
						onChange={onChange}
						value={inputData}
						onKeyDown={checkEnter}
						autoFocus
					/>
					<SendButton onClick={sendChat} />
				</InputBox>
			</>
		);
	}
	return (
		<>
			<Header>
				<BackButton
					onClick={() => {
						setIsOpen(false);
					}}
				/>
				<LeaveButton
					onClick={() => {
						if (confirm('정말로 채팅방을 나가시겠습니까?')) {
							socket.emit('offRoom');
							navigate('/');
						}
					}}
				/>
			</Header>
			<Body>
				<ChatInfo chatData={roomData} />
				<Subtitle>유저 리스트</Subtitle>
				<UserList>
					{userList.map(({ nickname, cType }, index) => (
						<User key={index}>
							<Profile number={cType} type='small' />{' '}
							<Nickname>{nickname}</Nickname>
						</User>
					))}
				</UserList>
			</Body>
		</>
	);
};

export default Chat;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 72px;
	padding: 0 28px;
`;

const BackButton = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	width: 30px;
	height: 30px;
	background-image: url('/images/back.svg');
`;

const ChatTitle = styled.h2`
	font-size: 18px;
	font-weight: bold;
`;

const MenuButton = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	width: 30px;
	height: 30px;
	background-image: url('/images/chatmenu.svg');
`;

const Toast = styled.div`
	padding: 5px 10px;
	width: 300px;
	background-color: #fff;
	border-radius: 10px;
	position: absolute;
	top: 80px;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	text-align: center;
`;

const ChatList = styled.ul`
	padding: 0 28px;
	list-style: none;
	overflow-y: scroll;
	height: calc(100vh - 72px - 82px);
`;

const MyMessage = styled.div`
	width: 215px;
	padding: 10px 20px;
	background-color: #4d12ff;
	color: #fff;
	border-radius: 10px;
	border-bottom-right-radius: 0px;
	margin-left: auto;
	margin-bottom: 20px;
`;

const InputBox = styled.div`
	height: 82px;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Input = styled.input`
	box-sizing: border-box;
	width: 320px;
	height: 45px;
	border: none;
	border-radius: 30px;
	background-color: #f1f1f1;
	padding: 0 50px;
`;

const SendButton = styled.button`
	width: 30px;
	height: 30px;
	border: none;
	position: absolute;
	right: 60px;
	background-image: url('/images/chatsend.svg');
`;

const LeaveButton = styled.button`
	width: 30px;
	height: 30px;
	border: none;
	background-image: url('/images/leavechat.svg');
`;

const Subtitle = styled.h3`
	color: #4d12ff;
	margin-bottom: 20px;
`;

const UserList = styled.ul``;

const User = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const Nickname = styled.p`
	margin-left: 20px;
`;

const Body = styled.div`
	padding: 20px;
`;

const MyImage = styled.img`
	width: 215px;
	margin-left: 130px;
	border-radius: 10px;
`;

const AddFile = styled.img`
	width: 30px;
	height: 30px;
	border: none;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 60px;
	background-image: url('/images/addfile.svg');
`;
