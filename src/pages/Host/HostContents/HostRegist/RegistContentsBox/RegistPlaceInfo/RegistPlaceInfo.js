import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

const RegistPlaceInfo = ({ formData, setFormData }) => {
  const { kakao } = window;

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [location, setLocation] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(location, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        data.map(cur => {
          markers.push({
            position: {
              lat: cur.y,
              lng: cur.x,
            },
            id: cur.id,
            content: cur.place_name,
            placeUrl: cur.place_url,
            location: cur.address_name,
          });
          bounds.extend(new kakao.maps.LatLng(cur.y, cur.x));
        });

        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [map, location]);

  const submitKeyword = () => {
    setLocation(value);
  };

  const onKeyDownHandler = e => {
    if (e.key === 'Enter') {
      submitKeyword();
    }
  };

  return (
    <PlaceContainer>
      <PlaceTitle>장소 정보</PlaceTitle>
      <PlaceSearchBox>
        <PlaceSearchInput
          type="text"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDownHandler}
        />
        <PlaceSearchbtn
          onClick={() => {
            submitKeyword();
          }}
        >
          검색
        </PlaceSearchbtn>
      </PlaceSearchBox>
      <MapBox>
        <Map
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            width: '100%',
            height: '500px',
          }}
          level={3}
          onCreate={setMap}
        >
          {markers.map(marker => (
            <div
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            >
              <MapMarker
                position={marker.position}
                onClick={() => setInfo(marker)}
                style={{ position: 'relative' }}
              />
              {info && info.content === marker.content && (
                <CustomOverlayMap
                  position={marker.position}
                  yAnchor={3}
                  xAnchor={0.5}
                >
                  <CustomOverlay>
                    <LocationBox>{marker.content}</LocationBox>
                  </CustomOverlay>
                </CustomOverlayMap>
              )}
            </div>
          ))}
        </Map>
        <PlaceListBox>
          {markers.map(list =>
            list.id === info?.id ? (
              <ActivePlaceList
                onClick={() => {
                  setInfo(list);
                  setFormData({
                    ...formData,
                    latitude: Number(list.position.lat),
                    longitude: Number(list.position.lng),
                    placeName: list.content,
                    placeUrl: list.placeUrl,
                    locationGroupName: list.location
                      .split(' ')
                      .slice(0, 2)
                      .join(' '),
                  });
                }}
                key={list.id}
              >
                <PlaceListName>{list.content}</PlaceListName>
                <PlaceListAdress>{list.location}</PlaceListAdress>
              </ActivePlaceList>
            ) : (
              <PlaceList
                onClick={() => {
                  setInfo(list);
                  setFormData({
                    ...formData,
                    latitude: Number(list.position.lat),
                    longitude: Number(list.position.lng),
                    placeName: list.content,
                    placeUrl: list.placeUrl,
                    locationGroupName: list.location
                      .split(' ')
                      .slice(0, 2)
                      .join(' '),
                  });
                }}
                key={list.id}
              >
                <PlaceListName>{list.content}</PlaceListName>
                <PlaceListAdress>{list.location}</PlaceListAdress>
              </PlaceList>
            )
          )}
        </PlaceListBox>
      </MapBox>
    </PlaceContainer>
  );
};

const PlaceContainer = styled.div`
  width: 100%;
`;

const PlaceTitle = styled.p`
  margin: 40px 0;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.5;
  color: ${({ theme }) => theme.style.deepGrey};
`;

const PlaceSearchBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  margin-bottom: 30px;
  width: 100%;
`;

const PlaceSearchInput = styled.input`
  margin-right: 30px;
  width: 80%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  font-size: 17px;
`;

const PlaceSearchbtn = styled.button`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')};
  padding-top: 3px;
  width: 18%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.style.primaryColor};
  color: white;
  font-size: 17px;
`;

const MapBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  position: relative;
  width: 100%;
`;

const CustomOverlay = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')};
  width: 100px;
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

const PlaceListBox = styled.ul`
  position: absolute;
  top: 25px;
  right: 10px;
  width: 200px;
  height: 450px;
  border-radius: 5px;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 10;
`;

const PlaceList = styled.li`
  ${({ theme }) => theme.variables.flex('column', 'flex-start', null)};
  padding: 10px;
  width: 100%;
  min-height: 60px;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.style.white};
  }
`;

const PlaceListName = styled.p`
  font-size: 15px;
  font-weight: 700;
`;
const PlaceListAdress = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.style.deepGrey};
  font-size: 13px;
`;

const ActivePlaceList = styled(PlaceList)`
  background-color: ${({ theme }) => theme.style.white};
  border: 2px solid ${({ theme }) => theme.style.primaryColor};
`;

export default RegistPlaceInfo;
