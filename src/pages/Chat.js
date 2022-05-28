import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { io } from 'socket.io-client';

let socket;

const Chat = () => {
  const navigate = useNavigate();
  const { chatid } = useParams();
  const [inputData, setInputData] = useState('');
  const [chatList, setChatList] = useState([]);

  const socketInitiate = () => {
    socket = io('https://test.junehan-test.shop', {
      auth: {
        token: localStorage.getItem('token'),
        nickname: localStorage.getItem('token'),
      },
    });
    socket.emit('joinRoom', { room: chatid });
    socket.on('roomUsers', ({ room, users }) => {
      console.log(room, users);
    });
    socket.on('message', message => {
      if (message.type === 'system') {
        console.log(message);
      } else if (message.type === 'text') {
        console.log(message);
        setChatList((prev) => [...prev, message])
      } else {
        console.log('Image message');
      }
    });
  };

  useEffect(async () => {
    
    socketInitiate();
    console.log(chatid);
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

  return (
    <>
      <Header>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        />
        <h2>채팅방 제목</h2>
        <MenuButton />
      </Header>
      <ChatList>
        {chatList.map((chat, index) => {
          if (chat.byMe) {
            return <MyMessageBox key={index}>{chat.content}</MyMessageBox>;
          }
          return (
            <ChatBox key={index}>
              <UserIcon />
              <div>
                {chat.nickname}
                <MessageBox>{chat.text}</MessageBox>
                {chat.time}
              </div>
            </ChatBox>
          );
        })}
      </ChatList>
      <InputBox>
        <Input type='text' placeholder='start chat' onChange={onChange} value={inputData} />
        <SendButton onClick={sendChat} />
      </InputBox>
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
  background-image: url('/images/backbutton.svg');
`;

const MenuButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-image: url('/images/chatmenu.svg');
`;

const ChatList = styled.ul`
  flex: 1;
  padding: 0 28px;
  list-style: none;
`;

const ChatBox = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const UserIcon = styled.div`
  width: 36px;
  height: 36px;
  background-image: url('/images/profiledefault.svg');
  margin-right: 10px;
`;

const MessageBox = styled.div`
  width: 215px;
  padding: 5px 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  border-top-left-radius: 0px;
`;

const MyMessageBox = styled.div`
  width: 215px;
  padding: 5px 20px;
  background-color: #4d12ff;
  color: #fff;
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  margin-left: auto;
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
  padding: 20px;
`;

const SendButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  position: absolute;
  right: 60px;
  background-image: url('/images/chatsend.svg');
`;
