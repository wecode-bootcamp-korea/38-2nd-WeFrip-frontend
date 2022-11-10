import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScheduleWrapper = ({ formData, setFormData, index, schedules }) => {
  const [timeValue, setTimeValue] = useState({
    content: '',
    startHour: '',
    startMinute: '',
    endHour: '',
    endMinute: '',
  });

  const onChangeValue = event => {
    const { name, value } = event.target;
    setTimeValue({ ...timeValue, [name]: value });
  };

  useEffect(() => {
    const setStartTime = `${timeValue.startHour}:${timeValue.startMinute}`;
    const setFinishTime = `${timeValue.endHour}:${timeValue.endMinute}`;

    let newArr = [...schedules];
    newArr[index] = {
      content: timeValue.content,
      startTime: setStartTime,
      finishTime: setFinishTime,
    };

    setFormData({ ...formData, schedules: newArr });
  }, [index, timeValue]);

  return (
    <ScheduleWrap>
      <ScheduleTime>
        <StartTime>
          <input
            type="text"
            name="startHour"
            placeholder="00"
            maxLength={2}
            onChange={onChangeValue}
          />
          :
          <input
            type="text"
            name="startMinute"
            placeholder="00"
            maxLength={2}
            onChange={onChangeValue}
          />
        </StartTime>
        ~
        <EndTime>
          <input
            type="text"
            name="endHour"
            placeholder="00"
            maxLength={2}
            onChange={onChangeValue}
          />
          :
          <input
            type="text"
            name="endMinute"
            placeholder="00"
            maxLength={2}
            onChange={onChangeValue}
          />
        </EndTime>
      </ScheduleTime>
      <ScheduleTitle
        placeholder="내용을 입력해주세요"
        name="content"
        onChange={onChangeValue}
      />
    </ScheduleWrap>
  );
};

export default ScheduleWrapper;

const ScheduleWrap = styled.li`
  display: flex;
  width: 100%;
`;

const ScheduleTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
`;
const ScheduleTitle = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.style.middleGrey};
  }
`;
const StartTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  input {
    width: 30px;
    text-align: center;
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;
const EndTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  input {
    width: 30px;
    text-align: center;
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;
