import React, { useState } from 'react';
import { ReactComponent as Searchglas } from '../assets/Searchglas.svg';
import { ReactComponent as Filter } from '../assets/Filter.svg';
import ProfileHeader from '../components/common/ProfileHeader';
import { Grid, Text, Button } from '../elements';
import styled from 'styled-components';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Dateset, CateChat, Notfound } from '../components';
const SerachChat = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const [start, setstart] = useState('');
  const [end, setend] = useState('');
  const [open, setOpen] = useState(false);
  const [errormsg, setErrormsg] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [selectedBefore, setSelectedBefore] = useState('');
  const [region, setRegion] = useState('전체');
  const [color, setColor] = useState('white');
  console.log(selectedMenu);
  const Setting = [
    {
      id: '전체',
    },
    {
      id: '서울',
    },
    {
      id: '인천',
    },
    {
      id: '강원',
    },
    {
      id: '경기',
    },
    {
      id: '충남',
    },
    {
      id: '충북',
    },
    {
      id: '경남',
    },
    {
      id: '경북',
    },
    {
      id: '전남',
    },
    {
      id: '전북',
    },
    {
      id: '제주도',
    },
  ];

  const sendword = () => {
    axios({
      method: 'get',
      url: `https://yogoloper.shop/api/rooms/search?&sort=1&word=${search}`,
    }).then(res => {
      // if (res.status == 404) {
      //   setErrormsg(res.status);
      //   return;
      // }
      setResult(res.data);
    });
  };

  //지역선택
  const handleMenu = id => {
    if (selectedBefore === id) {
      setSelectedMenu(null);
      setSelectedBefore(null);
      return;
    }
    setColor('#4D12FF');
    setSelectedMenu(id);
    setSelectedBefore(id);
  };

  const dofileter = () => {
    handleClose();
    axios({
      method: 'get',
      url: `https://yogoloper.shop/api/rooms/search?&sort=1&startDate=${start}&endDate=${end}&word=${search}`,
    }).then(res => {
      if (res.status == 404) {
        setErrormsg(res.status);
        return;
      }
      setResult(res.data);
    });
  };
  const style = {
    width: 315,
    height: 452,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

  const onChange = e => {
    setRegion(e.target.id);
  };

  return (
    <>
      <ProfileHeader search>
        검색
        <Grid position='absolute' top='40px' left='325px' _onClick={handleOpen}>
          <Filter />
        </Grid>
      </ProfileHeader>
      <Grid position='relative' flex>
        <Inputsearch onChange={e => setSearch(e.target.value)} />
        <Grid position='absolute' top='26px' left='309px' _onClick={sendword}>
          <Searchglas />
        </Grid>
      </Grid>

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Grid textAlign='center'>
            <Text bold>필터</Text>
          </Grid>
          <Text create bold margin='10px 0px 10px -19px'>
            일정
          </Text>
          <Grid signupFlex>
            <Dateset setstart={setstart} setend={setend} />
          </Grid>
          <Text create bold margin='10px 0px 10px -19px'>
            지역
          </Text>
          <Grid flex flexwrap>
            {Setting.map(Setting => {
              return (
                <Badge checked={region === Setting.id}>
                  <label>
                    {Setting.id}
                    <Radio
                      type='radio'
                      id={Setting.id}
                      name='region'
                      checked={region === Setting.id}
                      onChange={onChange}
                    />
                  </label>
                </Badge>
              );
            })}
          </Grid>
          <Button
            textAlign
            bg='#4D12FF'
            width='250px'
            margin='50px 0px 0px 0px'
            color='white'
            _onClick={dofileter}
          >
            검색
          </Button>
        </Box>
      </Modal>
      <Notfound />
      {result &&
        result.map(list => {
          return <CateChat list={list} />;
        })}
    </>
  );
};

const Inputsearch = styled.input`
  width: 320px;
  margin: 20px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 45px;
`;

const RegionBtn = styled.div`
  width: 50px;
  height: 24px;
  border-radius: 30px;
  border: 1px solid #b9b9b9;
  text-align: center;
  align-items: center;
  color: #b9b9b9;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #4d12ff;
  }
`;

const Badge = styled.div`
  border-radius: 30px;
  border: 1px solid #B9B9B9;
  padding: 4px 9px;
  margin: 2px 5px;
  ${({ checked }) => checked && 'background-color: #4d12ff; color: #fff;'}
`;

const Radio = styled.input`
  display: none;
`;

export default SerachChat;
