import styled from "styled-components";

export const BannerContainer = styled.div`
  background-color: #e7eaf0;
  padding: 25px 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const BannerText = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const BannerTitle = styled.p`
  font-weight: 500;
  font-size: 19px;
  line-height: 25px;
  letter-spacing: -0.03em;
  color: #333;
`;

export const BannerSubtitle = styled.p`
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #747474;
`;
