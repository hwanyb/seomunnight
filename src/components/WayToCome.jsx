import React from "react";
import styled from "styled-components";
import { subwayArr } from "../assets/data";
import { Icon, Noto300, Noto500, Noto700 } from "../style/Common";
import Map from "./Map";

const Base = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;
const MapWrppaer = styled.div`
  margin-bottom: 30px;
`;
const InfoWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid #ffc806;
  border-bottom: 1px solid #ffc806;
  padding: 30px 0;
`;
const MainInfo = styled.div`
  border-bottom: 1px solid #ffc806;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
const InfoTitleWrapper = styled.div`
  margin-right: 20px;
`;
const TitleIcon = styled(Icon)`
  font-size: 30px;
  margin-right: 10px;
`;
const InfoTitle = styled(Noto700)`
  display: flex;
  line-height: 30px;
  color: #081435;
  font-size: 18px;
  margin-bottom: 10px;
`;
const InfoTextWapper = styled.div`
`;
const InfoText = styled(Noto500)`
  text-align: left;
  color: #081435;
  line-height: 30px;
  font-size: 18px;
  margin-bottom: 10px;
`;
const SubwayInfo = styled.div``;
const SubwayWapper = styled.a`
  display: flex;
  align-items: center;
  margin-right: 10px;
  &::after {
    content: "";
    width: 1px;
    height: 16px;
    background-color: #081435;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  &:last-child::after {
    display: none;
  }
  & > h2:hover {
    color: #ff9900;
    transition: all 0.2s ease-in-out;
  }
`;
const SubwayLine = styled(Noto300)`
  line-height: 16px;
  font-size: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => (props.id !== 2 ? "#ffbb00" : "#16c000")};
  color: #fff;
  margin-right: 5px;
  margin-bottom: 10px;
`;
const BusInfo = styled.div``;

export default function WayToCome() {
  return (
    <Base>
      <MapWrppaer>
        <Map />
      </MapWrppaer>
      <InfoWrapper>
        <MainInfo className="flex">
          <InfoTitleWrapper>
            <InfoTitle>
              <TitleIcon className="material-symbols-rounded">
                location_on
              </TitleIcon>
              주소
            </InfoTitle>
            <InfoTitle>
              <TitleIcon className="material-symbols-rounded">call</TitleIcon>
              전화
            </InfoTitle>
          </InfoTitleWrapper>
          <InfoTextWapper>
            <InfoText>대구 중구 큰장로26길 45</InfoText>
            <InfoText>053-256-6341</InfoText>
          </InfoTextWapper>
        </MainInfo>
        <SubwayInfo>
          <InfoTitle>
            <TitleIcon className="material-symbols-rounded">
              directions_subway
            </TitleIcon>
            주변 지하철
          </InfoTitle>
          <InfoTextWapper className="flex">
            {subwayArr.map((subway, index) => (
              <SubwayWapper key={index} className="flex" target="_blank" href={`https://map.kakao.com/?subwayId=${subway.subwayId}&from=roughmap`}>
                <SubwayLine id={subway.line}>{subway.line}</SubwayLine>
                <InfoText>{subway.name}</InfoText>
              </SubwayWapper>
            ))}
          </InfoTextWapper>
        </SubwayInfo>
        <BusInfo>
          <InfoTitle>
            <TitleIcon className="material-symbols-rounded">
              directions_bus
            </TitleIcon>
            주변 정류장
          </InfoTitle>
        </BusInfo>
      </InfoWrapper>
    </Base>
  );
}
