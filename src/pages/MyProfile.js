import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import {
  MobileContainer,
  Grid,
  Button,
  Text,
  Image,
  Input,
  Container,
} from '../elements';
import { MdPhotoCamera } from 'react-icons/md';

// 햄버거바->프로필 수정 클릭시 보여줄 페이지

const MyProfile = (props) => {
  return (
    <>
      <Container>
        <MobileContainer>
          <ProfileHeader save>프로필 수정</ProfileHeader>
          <Grid signupFlex height='40vh' alignItems='center'>
            <Image inlineStyles='position: relative;'>
              <Grid inlineStyles='position: absolute; top:90px; left:110px;'>
                <MdPhotoCamera size='20px' />
              </Grid>
            </Image>
          </Grid>
          <Grid signupFlex>
            <Input placeholder='카카오톡 닉네임'>닉네임</Input>
          </Grid>
          <Grid signupFlex>
            <Button bg='black' margin='30px 0px 0px 0px' color='white'>
              로그아웃
            </Button>
          </Grid>
        </MobileContainer>
      </Container>
    </>
  );
};

export default MyProfile;
