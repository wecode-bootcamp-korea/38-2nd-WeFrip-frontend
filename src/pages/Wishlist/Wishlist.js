import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BASE_URL } from 'lib/api';
import { FaRegBookmark } from 'react-icons/fa';
import Wishlistlist from './components/Wishlistlist';

const Wishlist = () => {
  const [wished, setWished] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/wishlists`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => res.data.data)
      .then(data => {
        setWished(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Page>
      <Wrapper>
        {wished.length > 0 ? (
          <Wishlistlist wished={wished} />
        ) : (
          <>
            <FaRegBookmark size="55px" color="gray" />
            {TEXT_LIST.map(item => (
              <Text key={item.id} id={item.id}>
                {item.text}
              </Text>
            ))}
          </>
        )}
      </Wrapper>
    </Page>
  );
};

const Page = styled.div`
  ${props => props.theme.variables.flex()}
`;
const Wrapper = styled.div`
  ${props => props.theme.variables.flex('Column')}
  width:1200px;
  margin: 200px 0 200px 0;
  background-color: white;
`;

const Text = styled.div`
  margin: ${({ id }) => (id === 1 ? '30px 0 15px 0' : '0')};
  font-size: ${({ id }) => (id === 1 ? '30px' : '18px')};
  font-weight: ${({ id }) => (id === 1 ? '800' : '700')};
  color: gray;
`;

export default Wishlist;

const TEXT_LIST = [
  { id: 1, text: '아직 저장한 프립이 없어요.' },
  { id: 2, text: '관심있는 프립을 저장해 보세요!' },
];
