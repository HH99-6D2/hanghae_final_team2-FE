import DatePicker from "react-datepicker";
import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "../../elements";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
const Dateset = (props) => {
  const { width } = props;
  const MyDatePicker = styled(DatePicker)({
    width: "130px",
    height: "30px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: "1px solid #b9b9b9",
    textAlign: "center",
    margin: "0px 10px 0px 10px",
  });

  const changeFormat = (date, format) => {
    if (moment(date).isValid()) {
      return moment(date).format(format);
    }
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  props.setstart(changeFormat(startDate, "yyyy-MM-DD"));
  props.setend(changeFormat(endDate, "yyyy-MM-DD"));
  return (
    <Grid between height='40px'>
      <MyDatePicker
        dateFormat='yyyy.MM.dd'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        selectsStart
        startDate={startDate}
        placeholderText='시작 날짜'
        popperModifiers={{
          preventOverflow: { enabled: true },
        }}
        popperPlacement='auto'
      />
      <MyDatePicker
        dateFormat='yyyy.MM.dd'
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText='종료 날짜'
        selectsEnd
        endDate={endDate}
        minDate={startDate}
      />
    </Grid>
  );
};

export default Dateset;
