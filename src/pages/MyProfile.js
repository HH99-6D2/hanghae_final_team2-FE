import React from 'react';
import { MobileContainer, Grid, Button, Text, Image, Input } from '../elements';

const MyProfile = (props) => {
  return (
    <>
      <MobileContainer>
        <Grid>
          <Text>기업 회원가입</Text>
          <Text>기업으로 회원가입시 따로 아이디를 발급해드립니다.</Text>
        </Grid>
        <Grid>
          <Grid signupFlex margin='10px'>
            <Text>아이디</Text>
            <Input placeholder='ID' />
          </Grid>
          <Grid signupFlex margin='10px'>
            <Text>아이디</Text>
            <Input placeholder='ID' />
          </Grid>
          <Grid signupFlex>
            <Text>아이디</Text>
            <Input placeholder='ID' />
          </Grid>
          <Grid signupFlex>
            <Text>아이디</Text>
            <Input placeholder='ID' />
          </Grid>
        </Grid>
      </MobileContainer>
    </>
  );
};

export default MyProfile;
