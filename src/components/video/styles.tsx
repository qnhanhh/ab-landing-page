import styled from "styled-components";

export const VideoTitle = styled.p`
  margin: 8px 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #000;
`;

export const VideoImg = styled.img`
  display: block;
  margin: auto;
  width: 360px;
`;
export const VideoIframe = styled.iframe`
  display: block;
  margin: auto;
`;

export const VideoTagList = styled.ul`
  padding-left: 0;
  margin-bottom: 20px;
  list-style-type: none;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;

  & > li {
    padding: 2px 10px;
    background-color: #747474;
    border-radius: 4px;
    font-size: 10px;
    line-height: 16px;
    color: #fff;
  }
`;
