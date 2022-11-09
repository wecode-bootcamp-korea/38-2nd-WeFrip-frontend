import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductsInfoBox from './ProductsInfoBox/ProductsInfoBox';
import ProductsTitleBox from './ProductsTitleBox/ProductsTitleBox';
import API from 'config';
import { basicApi } from 'lib/api';

const Products = () => {
  const [productData, setProductData] = useState({});

  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await basicApi.get(`${API.detail}/${params.productId}`);
        const data = await res.data.data;

        setProductData({
          ...data[0],
          productImages: JSON.parse(data[0]?.productImages),
          schedules: JSON.parse(data[0]?.schedules),
          latitude: Number(data[0].latitude),
          longitude: Number(data[0].longitude),
        });
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  return (
    <ProductsContainer>
      <ProductsTitleBox productData={productData} />
      <ProductsInfoBox productData={productData} />
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  margin: 150px auto;
  width: 1000px;
`;

export default Products;
