import styled from 'styled-components';

export const VideoTitle = styled.p`
  margin: 8px 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const VideoImg = styled.img`
  display: block;
  margin: auto;
  width: 330px;
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
    background-color: var(--dark-grey);
    border-radius: 4px;
    font-size: 10px;
    line-height: 16px;
    color: var(--white);
  }
`;
