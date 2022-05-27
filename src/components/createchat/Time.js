import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { Grid } from "../../elements";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
const Time = (props) => {
  const MytimePicker = styled(DatePicker)({
    width: "155px",
    height: "30px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: "1px solid #b9b9b9",
    textAlign: "center",
    marginTop: "10px",
  });

  const changeFormat = (date, format) => {
    if (moment(date).isValid()) {
      return moment(date).format(format);
    }
  };

  const [starttime, setStarttime] = useState();
  const [endtime, setEndtime] = useState(null);

  props.setstarttime(changeFormat(starttime, "HH:mm:ss"));
  props.setendtime(changeFormat(endtime, "HH:mm:ss"));

  return (
    <Grid between height='40px'>
      <MytimePicker
        dateFormat='aa h:mm'
        locale={ko}
        selected={starttime}
        onChange={(time) => setStarttime(time)}
        // minDate={new Date()}
        selectsStart
        showTimeSelect
        showTimeSelectOnly
        startDate={starttime}
        placeholderText='시작 시간'
        timeIntervals={10}
        popperModifiers={{
          preventOverflow: { enabled: true },
        }}
        popperPlacement='auto'
      />
      <MytimePicker
        dateFormat='aa h:mm'
        locale={ko}
        selected={endtime}
        timeIntervals={10}
        showTimeSelect
        showTimeSelectOnly
        onChange={(time) => setEndtime(time)}
        selectsEnd
        placeholderText='종료 시간'
        endDate={endtime}
        // minDate={startDate}
      />
    </Grid>
  );
};

export default Time;
