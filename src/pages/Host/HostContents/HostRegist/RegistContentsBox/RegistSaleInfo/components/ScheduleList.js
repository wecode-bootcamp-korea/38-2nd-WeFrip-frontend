import React, { useState } from 'react';
import styled from 'styled-components';
import ScheduleWrapper from './ScheduleWrapper';

const ScheduleList = ({ formData, setFormData }) => {
  const { schedules } = formData;

  console.log(formData);
  const [countList, setCountList] = useState([
    {
      content: '',
      startHour: '',
      startMinute: '',
      endHour: '',
      endMinute: '',
    },
  ]);

  const handleListAdd = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
  };

  return (
    <TimeWrap>
      {countList.map((listNumber, index) => {
        return (
          <ScheduleWrapper
            key={listNumber.toString()}
            formData={formData}
            setFormData={setFormData}
            index={index}
            schedules={schedules}
          />
        );
      })}

      <AddBtn onClick={handleListAdd}>내용추가하기</AddBtn>
    </TimeWrap>
  );
};

export default ScheduleList;

const TimeWrap = styled.ul`
  width: 80%;
`;

const AddBtn = styled.button`
  width: 100%;
  padding: 10px 0;
`;
