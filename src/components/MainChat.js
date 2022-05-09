import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BsHeartFill } from 'react-icons/bs';
import { Grid, Text } from '../elements';
const MainChat = (props) => {
  return (
    <>
      <Card
        sx={{ minWidth: 245 }}
        style={{ borderRadius: '30px', border: '1px solid gray' }}
      >
        <CardContent>
          <Grid wrapper flex justifyContent='space-between'>
            <Typography variant='h5' component='div'>
              LG트윈스 이겨라!
            </Typography>
            <Typography>
              <Grid flex alignItems='center'>
                110
                <BsHeartFill />
              </Grid>
            </Typography>
          </Grid>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            잠실종합운동장
          </Typography>
          <Typography variant='body2'>채팅 인원 00/000명</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MainChat;
