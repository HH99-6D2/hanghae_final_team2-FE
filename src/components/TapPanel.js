import React, { Children } from "react";
import TabPanel from "@mui/lab/TabPanel";

const TapPanel = (props) => {
  const { value } = props;

  if (value == "1") {
    return (
      <>
        <TabPanel>{Children}</TabPanel>
      </>
    );
  }
};

export default TabPanel;
