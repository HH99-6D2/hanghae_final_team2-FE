import React from "react";
import { ReactComponent as Searchglas } from "../assets/Searchglas.svg";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import ProfileHeader from "../components/common/ProfileHeader";
import { Grid } from "../elements";
import styled from "styled-components";

const SerachChat = () => {
  return (
    <>
      <ProfileHeader search>
        검색
        <Grid position='absolute' top='40px' left='325px'>
          <Filter />
        </Grid>
      </ProfileHeader>
      <Grid position='relative' flex>
        <Inputsearch />
        <Grid position='absolute' top='26px' left='309px'>
          <Searchglas />
        </Grid>
      </Grid>
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
export default SerachChat;
