import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "../elements";
const Dateset = (props) => {
  const MyDatePicker = styled(DatePicker)({
    width: "155px",
    height: "30px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: "1px solid #b9b9b9",
    textAlign: "center",
    marginTop: "10px",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  console.log(startDate);
  console.log(endDate);
  return (
    <>
      <Grid between height='40px'>
        <MyDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          showTimeSelect // 시간 나오게 하기
          timeFormat='HH:mm' //시간 포맷
          timeIntervals={15} // 15분 단위로 선택 가능한 box가 나옴
          timeCaption='time'
          dateFormat='MMMM d, yyyy h:mm aa'
        />
        <MyDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          endDate={endDate}
          minDate={startDate}
          showTimeSelect // 시간 나오게 하기
          timeFormat='HH:mm'
          timeIntervals={15}
          timeCaption='time'
          dateFormat='MMMM d, yyyy h:mm aa'
        />
      </Grid>
    </>
  );
};
//   padding: 0px 53px;

export default Dateset;
