import styled from 'styled-components';

export const ContentContainer = styled.div`
  background-color: #f9f9f9;
  padding: 10px 15px;
`;

export const ContentHeader = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentSpan = styled.div`
  display: flex;
  gap: 5px;

  & > span {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: var(--light-black);
  }
`;
