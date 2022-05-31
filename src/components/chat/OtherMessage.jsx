import styled from 'styled-components';
import Profile from '../common/Profile';

const OtherMessage = ({ chat }) => {
  return (
    <Container>
      <Profile number={chat.cType} type='small' />
      <RightBox>
        {chat.type === 'text' ? (
          <>
            <NickName>{chat.nickname}</NickName>
            <MessageBox>{chat.text}</MessageBox>
            <Time>{chat.time}</Time>
          </>
        ) : (
          <>
            <Image src={chat.imageUrl} alt="사진" />
          </>
        )}
      </RightBox>
    </Container>
  );
};

export default OtherMessage;

const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  color: #767676;
`;

const RightBox = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const NickName = styled.p``;

const MessageBox = styled.div`
  width: 215px;
  padding: 5px 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  border-top-left-radius: 0px;
`;

const Time = styled.div`
  align-self: flex-end;
`;

const Image = styled.img`
  width: 215px;
  border-radius: 10px;
`