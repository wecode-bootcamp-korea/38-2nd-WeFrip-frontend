import React from 'react';
import styled from 'styled-components';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Grid from 'elements/Grid';

const ProductsMap = () => {
  return (
    <MapContainer>
      <MapTitle>진행하는 장소</MapTitle>
      <Grid>
        <Map
          center={{
            lat: 37.54699,
            lng: 127.09598,
          }}
          style={{
            width: '100%',
            height: '450px',
          }}
          level={4}
        >
          <MapMarker position={{ lat: 37.54699, lng: 127.09598 }} />
          <CustomOverlayMap
            position={{ lat: 37.54699, lng: 127.09598 }}
            yAnchor={3}
            xAnchor={0.5}
          >
            <CustomOverlay>
              <a
                href="https://map.kakao.com/link/map/11394059"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <LocationBox>구의 야구 공원</LocationBox>
              </a>
            </CustomOverlay>
          </CustomOverlayMap>
        </Map>
      </Grid>
    </MapContainer>
  );
};

const MapContainer = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.style.middleGrey};
`;

const MapTitle = styled.p`
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

const LocationBox = styled.span`
  display: block;
  padding: 5px;
  height: 20px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.style.primaryColor};
  color: white;
  font-size: 12px;
`;

const CustomOverlay = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')};
  width: 100px;
`;

export default ProductsMap;
