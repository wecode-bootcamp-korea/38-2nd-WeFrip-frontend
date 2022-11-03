import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ModalPopup from 'components/Modal/ModalPopup';
import FilterForm from './FilterForm/FilterForm';
import DateForm from './DateForm/DateForm';
import Product from 'components/Product/Product';
import { basicApi } from 'lib/api';
import API from 'config';

const List = () => {
  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState('');
  const [subCategoryLits, setSubCategoryLists] = useState([]);
  const [isDateModal, setIsDateModal] = useState(false);
  const [isFilterModal, setIsFilterModal] = useState(false);
  const [filtered, setFiltered] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { categories, subCategories } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lastDateParams = searchParams.get('lastDate');
  const firstDateParams = searchParams.get('firstDate');
  const sort = searchParams.get('sort');

  const removeDate = () => {
    setStartDate(null);
    setEndDate(null);
    setIsDateModal(false);
    searchParams.delete('firstDate');
    searchParams.delete('lastDate');
    setSearchParams(searchParams);
  };

  const removeFiltered = () => {
    setFiltered(null);
    setIsFilterModal(false);
    searchParams.delete('sort');
    setSearchParams(searchParams);
  };

  const selectDate =
    endDate !== null
      ? `${startDate.getMonth() + 1}월 ${startDate.getDate()}일 ~ ${
          endDate.getMonth() + 1
        }월 ${endDate.getDate()}일`
      : '날짜를 선택하세요';

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const onFilter = sort => {
    setFiltered(sort);
  };

  const toStringByFormatting = (date, delimiter) => {
    if (startDate !== null || endDate !== null) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return [year, month, day].join(delimiter);
    }
  };
  const seletStartDate = startDate && toStringByFormatting(startDate, '-');
  const selectEndDate = endDate && toStringByFormatting(endDate, '-');

  useEffect(() => {
    if (subCategories) {
      basicApi
        .get(
          `${API.list}/${categories}/${subCategories}?sort=${
            sort ? sort : ''
          }&firstDate=${firstDateParams ? firstDateParams : ''}&lastDate=${
            lastDateParams ? lastDateParams : ''
          }`
        )
        .then(res => res.data)
        .then(data => {
          if (firstDateParams || sort) {
            setLists(data.data);
          } else {
            setLists(JSON.parse(data.data[0].products));
          }
        });
    } else {
      basicApi
        .get(
          `${API.list}/${categories}?sort=${sort ? sort : ''}&firstDate=${
            firstDateParams ? firstDateParams : ''
          }&lastDate=${lastDateParams ? lastDateParams : ''}`
        )
        .then(res => res.data)
        .then(data => {
          if (firstDateParams || sort) {
            setLists(data.data);
          } else {
            setTitle(JSON.parse(data.data[0].mainCategories)[0].korName);
            setSubCategoryLists(JSON.parse(data.data[0].subCategories));
            setLists(JSON.parse(data.data[0].products));
          }
        });
    }
  }, [categories, subCategories, lastDateParams, firstDateParams, sort]);
  const handleDateParams = () => {
    searchParams.set('firstDate', seletStartDate);
    searchParams.set('lastDate', selectEndDate);
    setSearchParams(searchParams);
  };
  const handleFilterParams = () => {
    searchParams.set('sort', filtered);
    setSearchParams(searchParams);
  };
  const handleDateModal = () => {
    setIsDateModal(prev => !prev);
  };
  const handleFilterModal = () => {
    setIsFilterModal(prev => !prev);
  };

  const selectCategory = subCategoryLits?.filter(
    subcategory => subcategory.engName === categories
  );

  const handleMenu = e => {
    searchParams.delete('sort');
    searchParams.delete('firstDate');
    searchParams.delete('lastDate');
    setFiltered(null);
    setEndDate(null);
    const menuLinks = document.querySelectorAll('.active');
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].classList.remove('active');
    }
    e.target.classList.add('active');
  };

  return (
    <ListBox>
      {selectCategory && (
        <>
          <Title>{title}</Title>
          <SubMenu>
            <Link to={`/list/${categories}/`} onClick={handleMenu}>
              <li className={subCategories ? '' : 'active'}>전체</li>
            </Link>
            {subCategoryLits.map(({ engName, korName }, idx) => (
              <Link
                key={idx}
                to={`/list/${categories}/${engName}`}
                onClick={handleMenu}
              >
                <li>{korName}</li>
              </Link>
            ))}
          </SubMenu>
        </>
      )}

      <FilterWrap>
        {endDate && !isDateModal ? (
          <Filtered>
            <button onClick={handleDateModal}>{selectDate}</button>
            <AiOutlineCloseCircle className="closeIcon" onClick={removeDate} />
          </Filtered>
        ) : (
          <button onClick={handleDateModal}>날짜</button>
        )}
        {filtered && !isFilterModal ? (
          <Filtered>
            <button onClick={handleFilterModal}>적용됨</button>
            <AiOutlineCloseCircle
              className="closeIcon"
              onClick={removeFiltered}
            />
          </Filtered>
        ) : (
          <button onClick={handleFilterModal}>필터</button>
        )}
      </FilterWrap>
      {isDateModal && (
        <ModalPopup
          title="날짜정하기"
          close={removeDate}
          event={handleDateModal}
          btnTitle={selectDate}
          width="900"
          height="500"
          onParams={handleDateParams}
        >
          <DateForm
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
          />
        </ModalPopup>
      )}
      {isFilterModal && (
        <ModalPopup
          title="정렬하기"
          event={handleFilterModal}
          close={removeFiltered}
          btnTitle="적용하기"
          onParams={handleFilterParams}
        >
          <FilterForm filtered={filtered} onFilter={onFilter} />
        </ModalPopup>
      )}

      <ListWrap>
        {lists.map(list => (
          <Product key={list.productId} product={list} />
        ))}
      </ListWrap>
    </ListBox>
  );
};
const ListBox = styled.div`
  margin: 0 auto;
  padding-top: 120px;
  max-width: 1200px;
`;
const Title = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;
const FilterWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  button {
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.style.middleGrey};
    background: #fff;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const SubMenu = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: #000;

    li {
      &.active {
        color: ${({ theme }) => theme.style.primaryColor};
        font-weight: 700;
      }
    }
  }
`;
const ListWrap = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  flex-wrap: wrap;
`;
const Filtered = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 5px;
  button {
    border: none;
  }
  .closeIcon {
    cursor: pointer;
  }
`;
export default List;
