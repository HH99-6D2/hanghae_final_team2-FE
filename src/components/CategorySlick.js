import React from 'react';
import { Grid, Image, Button } from '../elements';
import kitchen from '../assets/kitchen.svg';
import { useNavigate } from 'react-router-dom';

const CategorySlick = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Grid categoryFlex width='100vw'>
        <Grid
          margin='0 10px'
          _onClick={() => {
            navigate('/catechat/1');
          }}
        >
          <Image CateBtn src={kitchen} size='174' />
          <Button homeCateBtn>스포츠</Button>
        </Grid>
        <Grid
          margin='0 10px'
          _onClick={() => {
            navigate('/catechat/1');
          }}
        >
          <Image CateBtn src={kitchen} size='174' />
          <Button homeCateBtn>콘서트</Button>
        </Grid>
        <Grid
          margin='0 10px'
          _onClick={() => {
            navigate('/catechat/1');
          }}
        >
          <Image CateBtn src={kitchen} size='174' />
          <Button homeCateBtn>전시회</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CategorySlick;
