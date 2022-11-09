import React from 'react';
import styled from 'styled-components';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Grid from 'elements/Grid';

const ProductsMap = ({ productData }) => {
  const { latitude, longitude, placeUrl, placeName } = productData;

  return (
    <MapContainer>
      <MapTitle>진행하는 장소</MapTitle>
      <Grid>
        <Map
          center={{
            lat: latitude,
            lng: longitude,
          }}
          style={{
            width: '100%',
            height: '450px',
          }}
          level={4}
        >
          <MapMarker
            position={{
              lat: latitude,
              lng: longitude,
            }}
          />
          <CustomOverlayMap
            position={{
              lat: latitude,
              lng: longitude,
            }}
            yAnchor={3}
            xAnchor={0.5}
          >
            <CustomOverlay>
              <a
                href={placeUrl}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <LocationBox>{placeName}</LocationBox>
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
  background-color: ${({ theme }) => theme.style.primaryColor};
  color: white;
  border-radius: 3px;
  font-size: 12px;
`;

const CustomOverlay = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')};
  width: 100px;
`;

export default ProductsMap;
