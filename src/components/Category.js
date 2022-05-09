import React from "react";
import styled from "styled-components";
import { Button, Grid, Text } from "../elements";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { IoAccessibility, IoBagSharp } from "react-icons/io5";

// 메인화면에 보여줄 카테고리 버튼

const Category = (props) => {
  return (
    <>
      <Grid flex justifyContent="space-between">
        <Grid flex direction="column" alignItems="center">
          <Button category>
            <Grid inlineStyles="position: absolute; top:20px; left:1px;">
              <MdOutlineSportsBaseball size="30px" />
            </Grid>
          </Button>
          <Text>스포츠</Text>
        </Grid>
        <Grid flex direction="column" alignItems="center">
          <Button category>
            <Grid inlineStyles="position: absolute; top:20px; left:1px;">
              <IoAccessibility size="30px" />
            </Grid>
          </Button>
          <Text>콘서트</Text>
        </Grid>
        <Grid flex direction="column" alignItems="center">
          <Button category>
            <Grid inlineStyles="position: absolute; top:20px; left:1px;">
              <IoBagSharp size="30px" />
            </Grid>
          </Button>
          <Text>박람회</Text>
        </Grid>
      </Grid>
    </>
  );
};
export default Category;
