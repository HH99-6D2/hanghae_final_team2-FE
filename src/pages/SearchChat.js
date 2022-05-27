import React from "react";
import { ReactComponent as Searchglas } from "../assets/Searchglas.svg";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import ProfileHeader from "../components/common/ProfileHeader";
import { Grid, Input } from "../elements";

const SerachChat = () => {
  return (
    <>
      <ProfileHeader search>
        검색
        <Grid position='absolute' top='40px' left='325px'>
          <Filter />
        </Grid>
      </ProfileHeader>
      <Grid position='relative' flex margin='20px auto'>
        <Input width='315px' />
        <Grid position='ab  solute' top='8px' left='280px'>
          <Searchglas />
        </Grid>
      </Grid>
    </>
  );
};

export default SerachChat;
