import React, { useState } from 'react';
// import styled from 'styled-components';
import { Button, Grid, Image } from '../elements';
import { useNavigate } from 'react-router-dom';
import kitchen from '../assets/kitchen.svg';
// import { MdOutlineSportsBaseball } from 'react-icons/md';

// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// 메인화면에 보여줄 카테고리 버튼

const Category = (props) => {
  const [chatlist, setchatlist] = useState('');
  const navigate = useNavigate();
  const cate = props.cate;
  console.log(cate);
  console.log(props);

  return (
    <React.Fragment>
      <Grid>
        <Image CateBtn src={kitchen} size='174' />
        <Button>맛집</Button>
      </Grid>
    </React.Fragment>
  );

  // return (
  //   <>
  //     <Grid flex justifyContent='space-between'>
  //       <Grid flex direction='column' alignItems='center'>
  //         <Button
  //           _onClick={() => {
  //             navigate(`/catechat/:${props.id}`);
  //           }}
  //           category
  //         >
  //           <Grid Category>
  //             <MdOutlineSportsBaseball size='30px' />
  //           </Grid>
  //         </Button>
  //         <Text>{props.name}</Text>
  //       </Grid>
  //     </Grid>
  //   </>
  // );
};

export default Category;
