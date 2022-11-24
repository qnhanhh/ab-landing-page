import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
`;

export const PopupModal = styled.div`
  margin: 10px;
  max-width: 340px;
  padding: 20px 25px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  line-height: 28px;
  color: #101828;
`;

export const PopupTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 3px;
`;

export const PopupSubtitle = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const PopupButton = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 9px;
  font-weight: 18px;
  color: #fff;
  background-color: #ff7629;
  border-radius: 10px;
`;
