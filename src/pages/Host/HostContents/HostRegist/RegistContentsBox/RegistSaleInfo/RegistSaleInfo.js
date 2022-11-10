import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createGlobalStyle } from 'styled-components';
import ScheduleList from './components/ScheduleList';

const RegistSaleInfo = ({ formData, setFormData }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [toggle, setToggle] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const makeArray = () => {
    const numArray = [];
    for (let i = 1; i <= 10; i++) {
      numArray.push(i);
    }
    return numArray;
  };
  const selectNumber = makeArray();
  const handleChangeSelect = e => {
    setSelectedNumber(e.target.value);
    setFormData({ ...formData, participants: Number(e.target.value) });
  };
  const toStringByFormatting = (date, delimiter) => {
    if (startDate !== '' || endDate !== '') {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return [year, month, day].join(delimiter);
    }
  };

  const onChangeStartDate = date => {
    setStartDate(date);
    setEndDate(date);
    const startForm = toStringByFormatting(date, '-');
    setFormData({ ...formData, firstDate: startForm });
  };
  const handlePrice = e => {
    setPrice(e.target.value);
    setFormData({ ...formData, price: Number(e.target.value) });
  };
  const handleDiscount = e => {
    setDiscount(e.target.value);
    setFormData({ ...formData, discountRate: Number(e.target.value) });
  };
  const lastPrice = (100 - Number(discount)) * 0.01 * price;

  const onChangeEndDate = date => {
    setEndDate(date);
    const endForm = toStringByFormatting(date, '-');
    setFormData({ ...formData, lastDate: endForm });
  };

  return (
    <RegistSaleInfoContainer>
      <SaleBox>
        <Title>위프립기간</Title>
        <InputWrap>
          <SubTitle>위프립 시작일</SubTitle>
          <>
            <DatePicker
              selected={startDate}
              onChange={date => onChangeStartDate(date)}
              minDate={new Date()}
            />
            <DatePickerHostStyles />
          </>
        </InputWrap>
        <InputWrap>
          <SubTitle>위프립 종료일</SubTitle>
          <DatePicker
            selected={endDate}
            onChange={date => onChangeEndDate(date)}
            minDate={startDate}
          />
          <DatePickerHostStyles />
        </InputWrap>
      </SaleBox>
      <Hr />
      <SaleBox>
        <Title>가격 설정</Title>
        <PriceInfo>
          <SubTitle>판매 가격 설정</SubTitle>
          <input type="text" value={price} onChange={handlePrice} />
        </PriceInfo>
        <PriceInfo>
          <SubTitle>가격 할인율 설정</SubTitle>
          <input type="text" value={discount} onChange={handleDiscount} />
          <span className="discountIcon">%</span>
        </PriceInfo>
        <PriceInfo>
          <SubTitle>최종 가격 확인</SubTitle>
          <LastPrice>
            {lastPrice ? `${lastPrice}원` : '숫자를 입력해주세요'}
          </LastPrice>
        </PriceInfo>
      </SaleBox>
      <Hr />
      <SaleBox>
        <Title>옵션/일정제한</Title>
        <SaleType>
          <SubTitle>판매 유형</SubTitle>
          <SelectWrap>
            <input type="radio" name="select1" id="dateAppoint" />
            <SelectBtn htmlFor="dateAppoint" onClick={() => setToggle(false)}>
              <span>날짜조율형</span>
              <br />
              호스트님이 크루 연락처로 별도 연락하여 일정을 조율하는 형태의
              프립입니다. (에스테틱, 네일 등에 적합)
            </SelectBtn>
            <input type="radio" name="select1" id="dateTune" />
            <SelectBtn htmlFor="dateTune" onClick={() => setToggle(true)}>
              <span>날짜지정형</span>
              <br />
              호스트님께서 날짜와 옵션을 등록하여 가능한 날에만 예약을 받을 수
              있는 프립입니다. 일정 관리 및 고객 관리를 더 간편하게 하실 수
              있습니다. (에스테틱, 네일 제외한 대부분의 프립)
            </SelectBtn>
          </SelectWrap>
        </SaleType>
      </SaleBox>
      {toggle && (
        <SaleType>
          <SubTitle>모집인원 제한</SubTitle>
          <SelectWrap>
            <input id="limitDate" type="radio" name="select2" />
            <SelectBtn htmlFor="limitDate">일정별 모집인원 제한</SelectBtn>
            <input id="limitOption" type="radio" name="select2" />
            <SelectBtn htmlFor="limitOption">옵션별 모집인원 제한</SelectBtn>
          </SelectWrap>
        </SaleType>
      )}
      <Hr />
      <SaleBox>
        <Title>인원 관리</Title>
        <InputWrap>
          <SubTitle>인원정보 입력</SubTitle>
          <SelectWrap>
            <select onChange={handleChangeSelect} value={selectedNumber}>
              {selectNumber.map(num => (
                <option key={String(num)} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </SelectWrap>
        </InputWrap>
      </SaleBox>
      <Hr />
      <ScheduleBox>
        <Title>스케줄 관리</Title>
        <InputWrap>
          <SubTitle>스케줄 정보 입력</SubTitle>
          <ScheduleList formData={formData} setFormData={setFormData} />
        </InputWrap>
      </ScheduleBox>
    </RegistSaleInfoContainer>
  );
};

export default RegistSaleInfo;
const RegistSaleInfoContainer = styled.div`
  padding: 0 10px;
  width: 100%;
`;
const SaleBox = styled.div``;
const Hr = styled.hr`
  margin: 20px 0;
  color: 1px solid ${({ theme }) => theme.style.middleGrey};
`;
const ScheduleBox = styled.div``;
const Title = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
const SubTitle = styled.p`
  display: block;
  width: 20%;
  font-size: 14px;
  margin-top: 5px;
  align-self: flex-start;
`;
const SaleType = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
`;
const PriceInfo = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  align-items: center;
  .discountIcon {
    margin-left: 5px;
  }
`;
const LastPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const SelectWrap = styled.div`
  display: flex;
  width: 80%;
  gap: 4%;

  input[type='radio'] {
    display: none;
    &:checked + label {
      background-color: ${({ theme }) => theme.style.lightGrey};
      border-color: ${({ theme }) => theme.style.primaryColor};
    }
  }
`;
const SelectBtn = styled.label`
  width: 48%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 10px;
  cursor: pointer;

  span {
    display: inline-block;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 18px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.style.lightGrey};
  }
`;

const DatePickerHostStyles = createGlobalStyle`
.react-datepicker-wrapper {
  width: 80%;
}
.react-datepicker {
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  width: 100%;
}
.react-datepicker__header  {
  background-color: #fff;
  border: none;
}
.react-datepicker__triangle {
  display: none;
}
.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  vertical-align: middle;
  margin: 0.166rem;
}
.react-datepicker__day-name {
  color: rgba(0,0,0,0.5);
}
.react-datepicker__current-month {
  font-size: 15px;
  font-weight: 400;
  margin-bottom: .6rem;
}
.react-datepicker__month-container {
  margin: 10px 20px;
}
.react-datepicker__navigation {
  top: 15px;
}
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
  width: 6px;
  height: 6px;
  border-width: 1px 1px 0 0;
  border-color: #000;
}
.react-datepicker__day:hover,
.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover,
.react-datepicker__year-text:hover {
  border-radius: 50%;
  background-color: #f0f0f0;
}
.react-datepicker__day--selected,
.react-datepicker__month-text--selected,
.react-datepicker__quarter-text--selected,
.react-datepicker__year-text--selected{
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
  color: #000;
}
.react-datepicker__day--selected:hover,
.react-datepicker__month-text--selected:hover,
.react-datepicker__quarter-text--selected:hover,
.react-datepicker__year-text--selected:hover{
  border-radius: 50%;
  background-color: ${({ theme }) => theme.style.primaryColor};
  color: #fff;
}
.react-datepicker__day--keyboard-selected,
.react-datepicker__month-text--keyboard-selected,
.react-datepicker__quarter-text--keyboard-selected,
.react-datepicker__year-text--keyboard-selected {
  border-radius: 0.3rem;
  background-color: rgba(0,0,0,0.1);
  color: #000;
}
.react-datepicker__day--keyboard-selected:hover,
.react-datepicker__month-text--keyboard-selected:hover,
.react-datepicker__quarter-text--keyboard-selected:hover,
.react-datepicker__year-text--keyboard-selected:hover {
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
}

.react-datepicker__day--outside-month,
.react-datepicker__day--outside-month:hover
{
  background-color: white;
}

.react-datepicker__input-container input {
  padding: 5px;

  &:focus-visible {
    outline: ${({ theme }) => theme.style.primaryColor} auto 1px;
  }
}
`;
