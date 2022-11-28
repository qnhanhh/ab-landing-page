import styled from 'styled-components';

export const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 2px;
  & > p {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: var(--black);
  }
`;
