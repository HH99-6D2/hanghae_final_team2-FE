import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "./TapPanel";
import { styled } from "@material-ui/core/styles";
import MainChat from "./MainChat";

// 햄버거바->채팅방관리-> 보여줄 탭

const MyBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
});

// onChange
const MyChat = (props) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
    switch (newValue) {
      case 1:
        console.log(newValue);

        break;

      default:
        break;
    }
  };

  const onclick = (event, newValue) => {
    console.log(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <MyBox sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="만든 채팅방" value="1" />
            <Tab label="참여 채팅방" value="2" />
            <Tab label="관심 채팅방" value="3" />
          </TabList>
        </MyBox>

        <TabPanel value="1">
          <MainChat />
        </TabPanel>
        <TabPanel value="2">
          <MainChat />
        </TabPanel>
        <TabPanel value="3">채팅방이 없습니다.</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MyChat;
