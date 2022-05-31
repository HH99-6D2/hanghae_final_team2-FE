import styled from 'styled-components';

const ChatInfo = ({ chatData }) => {
  return (
    <>
      <h2>채팅방 정보</h2>
      <Image src={chatData?.imageUrl} alt='채팅방 이미지' />
      <Table>
        <tbody>
          <tr>
            <Th>채팅 이름</Th>
            <td>{chatData?.title}</td>
          </tr>
          <tr>
            <Th>주제</Th>
            <td>{chatData?.category}</td>
          </tr>
          <tr>
            <Th>태그 정보</Th>
            <td>
              {chatData?.tags.map((tag, index) => (
                <Tag key={index}>{`#${tag}`}</Tag>
              ))}
            </td>
          </tr>
          <tr>
            <Th>일정</Th>
            <td>{chatData?.startDate} ~</td>
          </tr>
          <tr>
            <Th></Th>
            <td>{chatData?.endDate}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ChatInfo;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`

const Table = styled.table`
  border-spacing: 0 10px;
  margin: 20px auto;
`;

const Th = styled.th`
  text-align: left;
  vertical-align: top;
  color: #4d12ff;
  width: 150px;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 2px 5px;
  margin: 2px;
  border-radius: 10px;
  background-color: #eaeaea;
`;
